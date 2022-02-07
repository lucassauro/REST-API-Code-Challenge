# REST-API-Code-Challenge

<details>

<summary>Desafio de Backend</summary>
  
## Desafio de Backend

Seu **objetivo** é **criar uma API REST** com algumas **funções essenciais relacionadas** ao **gerenciamento de contas bancárias** em **uma** das linguagem: **Java, Kotlin, Python, Node.js, .NET**

- Para abrir uma conta é necessário apenas o nome completo e CPF da pessoa, mas só é permitido uma conta por pessoa;
- Com essa conta é possível realizar transferências para outras contas e depositar;
- Não aceitamos valores negativos nas contas;
- Por questão de segurança cada transação de depósito não pode ser maior do que R$2.000;
- As transferências entre contas são gratuitas e ilimitadas;

Em relação a **banco de dados**, **quem decide é você mesmo**.

Por favor, não esquecer de adicionar no README as instruções de como executar o projeto.

## O que avaliamos?

- Performance
- Testes
- Manutenabilidade
- Princípios de programação
- Arquitetura de Software

## Como entregar?

Não faça um fork desse projeto, crie um repositório PÚBLICO no seu perfil do GitHub. Pode criar privado mesmo, sem problemas.
Assim que terminar é só compartilhar o código com nosso usuário [devdigitalrepublic](https://github.com/devdigitalrepublic) e envie o link para rh@digitalrepublic.com.br

Boa sorte e divirta-se! ;)

</details>


## Descrição do projeto

Este projeto foi desenvolvido para candidatura à vaga de Software Developer Backend na Digital Republic.

A arquitetura MSC foi adotada para desenvolvimento da API, seguindo os padrões REST conforme exigido pelo enunciado do desafio. A principal intenção foi desenvolver a aplicação com baixo acoplamento para facilitar a manutenção e melhorar a legibilidade. 

Foram utilizados os frameworks Node.js e Express.js (JavaScript). 

O banco de dados utilizado foi o MySQL, em conjunto com o ORM Sequelize. As transferências entre contas utilizam _transactions_ para conferir segurança e credibilidade ao código; e evitar inconsistências de valores.

Com relação à segurança, o banco de dados armazena a hash (em SHA-256) da senha dos usuários e conta com bloqueio de login, com duração de 5 minutos, em caso de 3 tentativas malsucedidas consecutivas. Para autenticação dos usuários foi utilizada a biblioteca JSON Web Token, JWT. 

A aplicação conta com validação de dígito verificador do Cadastro de Pessoa Física e impede utilização de CPFs inválidos.
Para facilitar testes manuais, foi disponibilizado um endpoint `/cpf-generator` para geração de CPFs válidos.

A numeração das contas dos usuários seguem o padrão do Social Security Number (SSN) para mitigar a possibilidade de serem geradas contas com numerações iguais, não obstante haja verificação para garantia.

Foi utilizado o ESLint para uniformização do código, seguindo a configuração padrão Airbnb.

Para escrita de testes, foram utilizados os frameworks Sinon, Mocha e Chai.


## Banco de dados
<details>
  <summary>A seguinte modelagem foi utilizada: </summary>
  
![Modelagem do banco de dados](https://github.com/lucassauro/REST-API-Code-Challenge/blob/main/bank.png?raw=true)
  
</details>
 
[![wakatime](https://wakatime.com/badge/user/c9ea92f1-9424-4e76-9310-0d296f97b568/project/ae6db6d9-18d4-4c82-9634-a20d563be2a4.svg)](https://wakatime.com/badge/user/c9ea92f1-9424-4e76-9310-0d296f97b568/project/ae6db6d9-18d4-4c82-9634-a20d563be2a4)


## Instruções para execução

É necessário 
