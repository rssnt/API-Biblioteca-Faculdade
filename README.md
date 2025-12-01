Biblioteca API

API REST simples para gerenciamento de uma biblioteca, desenvolvida com Node.js, Express e Sequelize (SQLite).

Sobre o Projeto:
Este projeto foi criado como trabalho acadêmico e implementa um sistema básico de cadastro de livros, autores e gêneros literários. A API permite realizar operações CRUD completas em todas as entidades.

Tecnologias Utilizadas:

Node.js
Express.js
Sequelize ORM
SQLite
Nodemon (desenvolvimento)

Estrutura do Banco de Dados:

O banco utiliza SQLite e possui três tabelas principais:

Autores: armazena informações dos autores
Gêneros: categoriza os tipos de literatura
Livros: registra os livros com relacionamentos para autor e gênero

Como Executar?

Instale as dependências:

npm install

Inicie o servidor:

node server.js

O servidor estará rodando em http://localhost:3000

Endpoints da API

Autores

POST /autores - Criar novo autor
GET /autores - Listar todos os autores
GET /autores/:id - Buscar autor específico
PUT /autores/:id - Atualizar autor
DELETE /autores/:id - Excluir autor

Gêneros

POST /generos - Criar novo gênero
GET /generos - Listar todos os gêneros
GET /generos/:id - Buscar gênero específico
PUT /generos/:id - Atualizar gênero
DELETE /generos/:id - Excluir gênero

Livros

POST /livros - Criar novo livro
GET /livros - Listar todos os livros
GET /livros/:id - Buscar livro específico
PUT /livros/:id - Atualizar livro
DELETE /livros/:id - Excluir livro

Testando a API
Você pode importar o arquivo biblioteca_api_collection.json no Postman para testar todos os endpoints disponíveis.

Observações:

O banco de dados SQLite (biblioteca.sqlite) é criado automaticamente na primeira execução
Todas as rotas retornam JSON
A API valida dados obrigatórios antes de inserir no banco
