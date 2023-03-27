## 1. Endpoints

### Rotas e Endpoints

- [User](#1-user)

  - [POST - /users](#11-criação-de-usuários)
  - [GET - /users/profile](#12-acesso-ao-perfil-do-usuário)
  - [PATCH - /users/:id](#13-atualizar-os-dados-do-usuário)
  - [DELETE - /users/:id](#14-deletando-usuário)

- [Login](#2-login)

  - [POST /login](#21-realizando-o-login)

- [Contact](#3-contact)

  - [POST - /contacts](#31-criação-de-contatos)
  - [GET - /contacts](#32-listagens-de-contatos)
  - [GET - /contacts/:id](#33-contato-por-id)
  - [PATCH - /contacts/:id](#34-atualizar-os-dados-do-contato)
  - [DELETE - /contacts/:id](#35-deletando-os-dados-do-contato)

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

### 1.1 **Criação de usuários**

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

### Possíveis Erros:

| Código do Erro  | Descrição                                           |
| --------------- | --------------------------------------------------- |
| 409 Conflict    | E-mail já em uso. Isso vale para e-mail secundário. |
| 400 Bad Request | Falta de um campo obrigátorio.                      |

### 1.2. **Acesso ao perfil do usuário**

[ Voltar aos Endpoints ](#1-endpoints)

### `GET /users/profile`

### Autenticação

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "id": "a4fb1c6f-3cd6-486f-b53f-cff4242e7f8f",
  "name": "Davidson Quaresma de Matos",
  "email": "davidson@email.com",
  "secondEmail": "davidson2@email.com.br",
  "phone": "545585151",
  "secondPhone": "223458185",
  "isAdm": false,
  "createdAt": "2023-03-22T18:59:44.405Z",
  "updatedAt": "2023-03-22T18:59:44.405Z",
  "contacts": [
    {
      "id": "fbd12bd7-276a-46f1-ab48-894c2e5b25af",
      "name": "Davidson",
      "email": "davidson264sss@hotmail.com",
      "secondEmail": "davidson34s6ss@hotmail.com",
      "phone": "6456+4545+",
      "secondPhone": "223458185",
      "createdAt": "2023-03-22T22:55:38.709Z",
      "updatedAt": "2023-03-23T00:22:10.016Z"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 401 Unauthorized | Rota autenticada. |

### 1.3 **Atualizar os dados do usuário**

[ Voltar aos Endpoints ](#1-endpoints)

### `PATCH /users/:id`

### Autenticação

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição     |
| --------- | ------ | ------------- |
| id        | string | ID do usuário |

### Body para a requisição:

```json
{
  "email": "davidson@42email.com"
}
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "id": "6b4ca418-87ca-4461-accf-b6beaae9364d",
  "name": "Davidson Quaresma de Matos",
  "email": "davidson@42email.com",
  "secondEmail": "davidson@email.com.br",
  "phone": "545585151",
  "secondPhone": "223458185",
  "isAdm": false,
  "createdAt": "2023-03-22T18:35:26.464Z",
  "updatedAt": "2023-03-22T18:50:29.073Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                           |
| ---------------- | --------------------------------------------------- |
| 401 Unauthorized | Rota autenticada.                                   |
| 401 Unauthorized | Precisa estar autorizado a usar a rota.             |
| 409 Conflict     | E-mail já em uso. Isso vale para e-mail secundário. |

---

### 1.4 **Deletando usuário**

[ Voltar aos Endpoints ](#1-endpoints)

### `DELETE /users/:id`

### Autenticação

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição     |
| --------- | ------ | ------------- |
| id        | string | ID do usuário |

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 204 - No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição                               |
| ---------------- | --------------------------------------- |
| 401 Unauthorized | Rota autenticada.                       |
| 401 Unauthorized | Precisa estar autorizado a usar a rota. |

---

### 2. **Login**

### Endpoints

| Método | Rota   | Descrição             |
| ------ | ------ | --------------------- |
| POST   | /login | Usuário realiza login |

[ Voltar aos Endpoints ](#1-endpoints)

### 2.1. **Realizando o Login**

### `POST /login`

### Body para a requisição:

```json
{
  "email": "usuario@mail.com",
  "password": "user123"
}
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG0iOmZhbHNlLCJpYXQiOjE2NzM4Nzg1NzgsImV4cCI6MTY3Mzk2NDk3OCwic3ViIjoiN2RiM2E4OGUtY2M2Zi00YTY4LWJkYmQtOWI4ZGM4N2EzZDE5In0.CdBo9mk-ZpJwgJX4hNEIXqXo_VLMe6XXZRy2f4W4JEs"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                |
| ---------------- | ------------------------ |
| 401 Unauthorized | Email ou senha inválida. |

## 3. **Contact**

[ Voltar para os Endpoints ](#1-endpoints)

O objeto Contact é definido como:

| Campo       | Tipo   | Descrição                                 |
| ----------- | ------ | ----------------------------------------- |
| id          | string | Identificador único                       |
| name        | string | O nome completo                           |
| email       | string | E-mail do contato.                        |
| secondEmail | string | E-mail secundário do contato.             |
| phone       | string | Número de telefone do contato.            |
| secondPhone | string | Número de telefone secundário do contato. |
| createdAt   | string | Data de criação                           |
| updatedAt   | string | Data de atualização                       |

### Endpoints

| Método | Rota          | Descrição                                    |
| ------ | ------------- | -------------------------------------------- |
| POST   | /contacts     | Criação de um contato.                       |
| GET    | /contacts     | Lista todos os contato do usuário.           |
| GET    | /contacts/:id | Lista um contato usando o ID como parâmetro. |
| PATCH  | /contacts/:id | Atualização dos dados .                      |
| DELETE | /contacts/:id | Deleta o contato passando o ID.              |

---

### 3.1. **Criação de contatos**

[ Voltar para os Endpoints ](#1-endpoints)

### `POST /contacts`

### Autenticação

### Body para a requisição:

```json
{
  "name": "Davidson Quaresma de Matos",
  "email": "davidson264sssss@hotmail.com",
  "phone": "665615489",
  "secondEmail": "davidson34s6ssss@hotmail.com",
  "secondPhone": "223458185",
  "dkasdf": "para ser ignorado"
}
```

### Exemplo de Response:

```
STATUS: 201 Created
```

```json
{
  "id": "51ed5d6a-6b71-4f6d-8ae1-6a968de3b09a",
  "name": "Davidson Quaresma de Matos",
  "email": "davidson264sssss@hotmail.com",
  "secondEmail": "davidson34s6ssss@hotmail.com",
  "phone": "665615489",
  "secondPhone": "223458185",
  "createdAt": "2023-03-23T00:21:08.438Z",
  "updatedAt": "2023-03-23T00:21:08.438Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                           |
| ---------------- | --------------------------------------------------- |
| 401 Unauthorized | Rota autenticada.                                   |
| 409 Conflict     | E-mail já em uso. Isso vale para e-mail secundário. |

---

### 3.2. **Listagens de contatos**

[ Voltar para os Endpoints ](#1-endpoints)

### `GET /contacts`

### Autenticação

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 200 Ok
```

```json
[
  {
    "name": "Davidson",
    "email": "davidson264sss@hotmail.com",
    "secondEmail": "davidson34s6ss@hotmail.com",
    "phone": "6456+4545+",
    "secondPhone": "223458185",
    "createdAt": "2023-03-22T22:55:38.709Z",
    "updatedAt": "2023-03-23T00:22:10.016Z",
    "id": "fbd12bd7-276a-46f1-ab48-894c2e5b25af"
  }
]
```

### Possíveis Erros:

| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 401 Unauthorized | Rota autenticada. |

---

### 3.3. **Contato por id**

[ Voltar para os Endpoints ](#1-endpoints)

### `GET /contacts/:id`

### Autenticação

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição     |
| --------- | ------ | ------------- |
| id        | string | ID do usuário |

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 200 Ok
```

```json
{
  "id": "6c5cbb79-b24f-456c-bd29-3a4231becbd4",
  "name": "Davidson",
  "email": "davidson264ssss@hotmail.com",
  "secondEmail": "davidson34s6sss@hotmail.com",
  "phone": "6456+4545+",
  "secondPhone": "223458185",
  "createdAt": "2023-03-23T00:10:07.503Z",
  "updatedAt": "2023-03-23T00:18:27.912Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                               |
| ---------------- | --------------------------------------- |
| 401 Unauthorized | Rota autenticada.                       |
| 401 Unauthorized | Precisa estar autorizado a usar a rota. |

---

### 3.4 **Atualizar os dados do contato**

[ Voltar aos Endpoints ](#1-endpoints)

### `PATCH /contacts/:id`

### Autenticação

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição     |
| --------- | ------ | ------------- |
| id        | string | ID do usuário |

### Body para a requisição:

```json
{
  "email": "davidson@42email.com"
}
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "id": "6b4ca418-87ca-4461-accf-b6beaae9364d",
  "name": "Davidson Quaresma de Matos",
  "email": "davidson@42email.com",
  "secondEmail": "davidson@email.com.br",
  "phone": "545585151",
  "secondPhone": "223458185",
  "createdAt": "2023-03-22T18:35:26.464Z",
  "updatedAt": "2023-03-22T18:50:29.073Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                           |
| ---------------- | --------------------------------------------------- |
| 401 Unauthorized | Rota autenticada.                                   |
| 401 Unauthorized | Precisa estar autorizado a usar a rota.             |
| 409 Conflict     | E-mail já em uso. Isso vale para e-mail secundário. |

---

### 3.5 **Deletando os dados do contato**

[ Voltar aos Endpoints ](#1-endpoints)

### `DELETE /contacts/:id`

### Autenticação

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição     |
| --------- | ------ | ------------- |
| id        | string | ID do usuário |

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 204 - No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição                               |
| ---------------- | --------------------------------------- |
| 401 Unauthorized | Rota autenticada.                       |
| 401 Unauthorized | Precisa estar autorizado a usar a rota. |
