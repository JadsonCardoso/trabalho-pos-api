# API de Transferências

Esta API permite o registro, login, consulta de usuários e transferências de valores entre usuários, com regras de negócio para aprendizado de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```
npm install express swagger-ui-express
   ```

## Como rodar

- Para rodar a API:
  ```
  node server.js
  ```
- A API estará disponível em `http://localhost:3000`.
- A documentação Swagger estará em `http://localhost:3000/api-docs`.

## Endpoints principais

- `POST /users/register` — Registro de usuário
- `POST /users/login` — Login de usuário
- `GET /users` — Listar usuários
- `POST /users/{username}/favorecido` — Adicionar favorecido
- `POST /transfers` — Realizar transferência
- `GET /transfers` — Listar transferências

Consulte a documentação Swagger para detalhes de payloads e respostas.

## Regras de negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.
- Banco de dados em memória (os dados são perdidos ao reiniciar o servidor).

## Testes
- O arquivo `app.js` pode ser importado em ferramentas de teste como Supertest.

---

Para dúvidas, consulte o endpoint `/api-docs` ou o código-fonte.
