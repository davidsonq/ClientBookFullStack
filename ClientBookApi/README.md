## 1. Endpoints

### Rotas e Endpoints

- [User](#1-users)
- [POST - /users](#11-criação-de-usuários)
- [GET - /users/profile](#12-listar-profile-usuário)
- [PATCH - /users/:id](#13-atualizar-os-dados-do-usuário)
- [DELETE - /users/:id](#14-deletando-usuário)
- [Contact](#2-contacts)
- [POST - /contacts](#21-criação-de-contatos)
- [GET - /contacts](#22-lista-todos-contatos-usuário)
- [GET - /contacts/:id](#23-lista-contato-por-id)
- [PATCH - /contacts/:id](#24-atualizar-os-dados-do-contato)
- [DELETE - /contacts/:id](#24-deletando-os-dados-do-contato)

## 1. **User**

[ Voltar para os Endpoints ](#1-endpoints)

O objeto User é definido como:

| Campo       | Tipo    | Descrição                                 |
| ----------- | ------- | ----------------------------------------- |
| id          | uuid    | Identificador único do usuário            |
| name        | string  | O nome completo do usuário.               |
| email       | string  | Email do usuário.                         |
| secondEmail | string  | Email secundário do usuário.              |
| phone       | string  | Número de telefone do usuário.            |
| secondPhone | string  | Número secundário de telefone do usuário. |
| isAdm       | boolean | Se o usuário é admin.                     |
| createdAt   | date    | Data de criação do usuário                |
| updatedAt   | date    | Data que o usuário atualizou              |

### Endpoints

| Método | Rota           | Descrição                         |
| ------ | -------------- | --------------------------------- |
| POST   | /users         | Criação de um usuário.            |
| GET    | /users/profile | Lista perfilt do usuário.         |
| PATCH  | /users/:id     | Atualização dos dados do usuário. |
| DELETE | /users/:id     | Deleta o usuário passando o ID    |

### 1.1 **Criação de Users**

[ Voltar para os Endpoints ](#1-endpoints)

### `POST /users`

### Body para a requisição:

```json
{
  "name": "Davidson Quaresma de Matos",
  "email": "davidson@email.com",
  "password": "123456",
  "phone": "545585151",
  "secondEmail": "davidson2@email.com.br",
  "secondPhone": "223458185"
}
```

### Exemplo de Response:

```
STATUS: 201 Created
```

```json
{
  "id": "6b4ca418-87ca-4461-accf-b6beaae9364d",
  "name": "Davidson Quaresma de Matos",
  "email": "davidson@email.com",
  "secondEmail": "davidson@email.com.br",
  "phone": "545585151",
  "secondPhone": "223458185",
  "isAdm": false,
  "createdAt": "2023-03-22T18:35:26.464Z",
  "updatedAt": "2023-03-22T18:35:26.464Z"
}
```
