# API RESTful de Times da NBA

Esta é uma aplicação RESTful construída com Node.js e Express.js que permite realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de times da NBA.

## Funcionalidades

- **Listagem de Times**: Endpoint para listar todos os times da NBA.
- **Detalhes do Time**: Endpoint para obter detalhes de um time específico por ID.
- **Adição de Time**: Endpoint para adicionar um novo time à coleção.
- **Atualização de Time**: Endpoint para atualizar informações de um time existente.
- **Remoção de Time**: Endpoint para remover um time existente da coleção.

## Como usar

1. **Instalação das Dependências**:
npm install

2. **Execução da Aplicação**:
npm start


3. **Endpoints Disponíveis**:

- Listar Times: `GET /api/teams`
- Detalhes do Time: `GET /api/teams/:id`
- Adicionar Time: `POST /api/teams`
- Atualizar Time: `PUT /api/teams/:id`
- Remover Time: `DELETE /api/teams/:id`

4. **Exemplos de Uso**:

- Listar Todos os Times:
  ```
  GET http://localhost:3000/api/teams
  ```

- Obter Detalhes de um Time Específico:
  ```
  GET http://localhost:3000/api/teams/1
  ```

- Adicionar um Novo Time:
  ```
  POST http://localhost:3000/teams
  Content-Type: application/json

  {
    "name": "Los Angeles Lakers",
    "group": "A"
  }
  ```

- Atualizar Informações de um Time Existente:
  ```
  PUT http://localhost:3000/teams/1
  Content-Type: application/json

  {
    "name": "San Francisco"
  }
  ```

- Remover um Time Existente:
  ```
  DELETE http://localhost:3000/teams/1
  ```

## Tecnologias Utilizadas

- Node.js
- Express.js
- Mysql (ou outro banco de dados de sua escolha)
- *Lembrando que ao baixar o repositorio, criar base e configurar com as credenciais da base, caso seja necessário.*

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

