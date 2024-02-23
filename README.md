# Teste Seletivo Desenvolvedor III - O Boticário

Este projeto foi desenvolvido como parte do teste seletivo para a posição de Desenvolvedor III na empresa O Boticário. A aplicação consiste em uma API escrita em TypeScript utilizando o framework Fastify, TypeORM para integração com o banco de dados e Docker para gerenciar as configurações do banco de dados.

## Entidades

### User
A entidade `User` é responsável pela criação e autenticação na aplicação. Utiliza JWT para autenticação e Bcrypt para segurança das senhas.

### Product, Brand e Inventory
As entidades `Product`, `Brand` e `Inventory` foram inspiradas nas informações do site O Boticário, obtidas ao inspecionar a requisição ao selecionar o carrinho de compras. A entidade `Product` foi escolhida para implementação como exemplo real.

## Pré-requisitos
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) e [docker-compose](https://docs.docker.com/compose/)

## Execução do Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instalar Dependências
```bash
npm install
# ou
yarn install
```

### 3. Iniciar o Banco de Dados com Docker
```bash
docker-compose up -d
```

### 4. Executar as Migrações do TypeORM
```bash
npm run migration
# ou
yarn migration
```

### 5. Iniciar a Aplicação
```bash
npm start
# ou
yarn start
```

### 6. Acessar a Aplicação
Abra o navegador e acesse `http://localhost:3000` (ou a porta configurada).

## Endpoints da API
- **POST /api/users/register**: Cria um novo usuário.
- **POST /api/users/login**: Realiza o login do usuário e retorna um token JWT.
- **GET /api/products/:sku**: Retorna detalhes do produto com o SKU especificado.
- **POST /api/products**: Cria um novo produto.
- **PUT /api/products/:sku**: Atualiza os detalhes do produto com o SKU especificado.
- **DELETE /api/products/:sku**: Exclui o produto com o SKU especificado.
- **GET /api/brands/:id**: Retorna detalhes da marca com o ID especificado.
- **POST /api/brands**: Cria uma nova marca.
- **PUT /api/brands/:id**: Atualiza os detalhes da marca com o ID especificado.
- **DELETE /api/brands/:id**: Exclui a marca com o ID especificado.
- **GET /api/inventory/:id**: Retorna detalhes do inventário com o ID especificado.
- **POST /api/inventory**: Cria um novo inventário.
- **PUT /api/inventory/:id**: Atualiza os detalhes do inventário com o ID especificado.
- **DELETE /api/inventory/:id**: Exclui o inventário com o ID especificado.

## Importação no Postman
Você pode importar os endpoints facilmente utilizando o arquivo `oboticrud.postman_collection` na raiz do projeto.

## Contribuindo
Contribuições são bem-vindas! Por favor, abra uma issue para discutir as mudanças propostas.

## Observações
Este projeto foi criado como parte de um teste seletivo para Desenvolvedor III na empresa O Boticário. As entidades `Product`, `Brand` e `Inventory` foram escolhidas com base nas informações disponíveis no site da empresa.
