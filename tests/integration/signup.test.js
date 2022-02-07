/* eslint-disable no-console */
const chai = require('chai');
const { describe, it, before } = require('mocha');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

const app = require('../../index');

// Para omitir os console logs gerados no teste, descomente este trecho.

describe('Realiza tentativa de cadastro', () => {
  const password = '!234Oiee';
  let signup;
  describe('Com informações válidas', () => {
    before(async () => {
      try {
        const { body: { cpf } } = await chai.request(app)
          .get('/cpf-generator');
        const baseSixtyFour = Buffer.from(`${cpf}:${password}`).toString('base64');
        signup = await chai.request(app)
          .post('/signup')
          .set('authorization', `Basic ${baseSixtyFour}`)
          .send({
            firstName: 'Lucas',
            middleName: '',
            lastName: 'Lima',
          });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message);
      }
    });
    it('retorna status 200', async () => {
      const { status } = signup;
      expect(status).to.be.equal(200);
    });
    it('e um objeto com uma propriedade chamada token e outra chamada result', () => {
      const { body } = signup;
      expect(body).to.have.property('token');
      expect(body).to.have.property('result');
    });
  });

  describe('com informações inválidas', () => {
    before(async () => {
      const { body: { cpf } } = await chai.request(app)
        .get('/cpf-generator');
      const baseSixtyFour = Buffer.from(`${cpf}:${password}`).toString('base64');
      signup = await chai.request(app)
        .post('/signup')
        .set('authorization', `Basic ${baseSixtyFour}`)
        .send({
          firstName: '',
          middleName: '',
          lastName: 'Lima',
        });
    });
    it('retorna status 400', () => {
      const { status } = signup;
      expect(status).to.be.equal(400);
    });
    it('e um objeto contendo erro', () => {
      const { body: { error } } = signup;
      expect(error).to.be.equal('missingFirstName');
    });
  });
});

describe('Realiza tentativa de acesso à conta após obter token do cadastro', () => {
  const password = '!234Oiee';
  let signup;
  let verify;
  describe('', () => {
    before(async () => {
      try {
        const { body: { cpf } } = await chai.request(app)
          .get('/cpf-generator');
        const baseSixtyFour = Buffer.from(`${cpf}:${password}`).toString('base64');
        signup = await chai.request(app)
          .post('/signup')
          .set('authorization', `Basic ${baseSixtyFour}`)
          .send({
            firstName: 'Lucas',
            middleName: '',
            lastName: 'Lima',
          });
        const { body: { token } } = signup;
        verify = await chai.request(app)
          .get('/me')
          .set('Authorization', `Bearer ${token}`);
      } catch (e) {
        console.error(e.message);
      }
    });
    it('retorna status 200', async () => {
      const { status } = verify;
      expect(status).to.be.equal(200);
    });
    it('As informações do token estão corretas', () => {
      const { body: { customerId: id } } = verify; // retornado no objeto do endpoint /me.
      const { body: { result: { customerId } } } = signup; // retornado ao realizar signup.

      expect(id).to.be.equal(customerId);
    });
  });
});
