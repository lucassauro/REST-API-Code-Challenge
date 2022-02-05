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

A arquitetura MSC foi escolhida para desenvolvimento da API, seguindo os padrões REST como exigido pelo enunciado do desafio, com utilização dos frameworks Node.js e Express.js (JavaScript). O banco de dados utilizado foi o MySQL, em conjunto com o ORM (Object-Relational Mapper) Sequelize para fazer uso das _transactions_, e conferir segurança e cridibilidade ao código; e evitar inconsistências nas transferências do banco.

Para escrita de testes, foram utilizados os frameworks Sinon, Mocha e Chai.


[![wakatime](https://wakatime.com/badge/user/c9ea92f1-9424-4e76-9310-0d296f97b568/project/ae6db6d9-18d4-4c82-9634-a20d563be2a4.svg)](https://wakatime.com/badge/user/c9ea92f1-9424-4e76-9310-0d296f97b568/project/ae6db6d9-18d4-4c82-9634-a20d563be2a4)

