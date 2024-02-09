# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Gabriel Felipe Souza Santos*

### Resumo
  Este trabalho apresenta o desenvolvimento de uma API de cadastros de usuários, incluindo funcionalidades completas de CRUD (Create, Read, Update, Delete), autenticação via JWT (JSON Web Tokens), e integração com um banco de dados SQLite local. Construído sobre o framework NestJS, o projeto se beneficia de seus módulos para facilitar o desenvolvimento, oferecendo uma solução robusta e escalável para a gestão de usuários. Adicionalmente, o projeto incorpora documentação via Swagger e emprega testes E2E (End-to-End) para assegurar a qualidade e o correto funcionamento da API.

### 1. Funcionalidades implementadas
- CRUD Completo: Implementação dos endpoints para criação, leitura, atualização e exclusão de usuários no sistema.
- Autenticação JWT: Configuração da autenticação utilizando tokens JWT, garantindo segurança no acesso aos endpoints.
- Integração com SQLite: Uso do TypeORM para integração com um banco de dados SQLite, proporcionando persistência dos dados.
- Documentação com Swagger: Disponibilização de uma interface Swagger para fácil visualização e teste dos endpoints da API.
- Testes E2E: Desenvolvimento de testes end-to-end para validar o funcionamento da API em cenários de uso real.
  
### 2. Funcionalidades previstas e não implementadas
- Controle de Acesso: Definir e gerenciar as permissões de acesso dos usuários às diferentes áreas do sistema. Não foi implementada devido a limitações de tempo e ao escopo inicial do projeto focar na funcionalidade básica de gerenciamento de usuários.

### 4. Principais desafios e dificuldades
O principal desafio encontrado foi a integração entre NestJS e TypeORM para a gestão eficaz do banco de dados SQLite, principalmente em relação à configuração inicial e mapeamento de entidades. A documentação e exemplos da comunidade foram essenciais para superar essas dificuldades. Além disso, a implementação de testes E2E exigiu um entendimento profundo da API para simular cenários de uso real, desafio superado através da prática e da revisão de testes similares.

### 5. Instruções para instalação e execução
Primeiramente crie um arquivo ``.env`` usando o de referencia o de exemplo na pasta raiz. E adicione uma secret key de sua preferência para o JWT na váriavel ``JWT_SECRET``. Demais váriaveis se necessário podem ser editadas de acordo com as suas preferências.

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar o servidor da API:
$ npm run start

# Caso queira iniciar o servidor da API em modo assistido:
$ npm run start:dev

# Após isso, o projeto pode ser inicializado e os endpoints estarão prontos para ser utilizados!

# Para executar todos os testes e2e:
$ npm run test:e2e

# Para executar um teste específico do projeto:
$ npm run test:e2e "nome do arquivo"

# Documentação swagger.
Ex.: http://localhost:3000/docs
```

### 6. Referências
- [Bcrypt](https://www.npmjs.com/package/bcrypt/)
- [Class Validator](https://github.com/typestack/class-validator#readme)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Node.js](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [Npm](https://www.npmjs.com/)
- [Passport](https://www.passportjs.org/)
- [passport-jwt](https://github.com/mikenicholson/passport-jwt)
- [SQLite3](https://github.com/TryGhost/node-sqlite3)
- [SuperTest](https://www.npmjs.com/package/supertest/)
- [Swagger](https://swagger.io/)
- [TypeORM](https://typeorm.io/)
- [TypeScript](https://www.typescriptlang.org/)
