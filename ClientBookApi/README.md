## 1. Endpoints

### Rotas e Endpoints

-   [User](#1-users)
-   [POST - /users](#11-criação-de-usuários)
-   [GET - /users/profile](#12-listar-profile-usuário)
-   [PATCH - /users/:id](#13-atualizar-os-dados-do-time)
-   [DELETE - /users/:id](#14-deletando-time)

## 1. **User**

[ Voltar para os Endpoints ](#1-endpoints)

O objeto User é definido como:

| Campo      | Tipo    | Descrição                              |
| ---------- | ------- | -------------------------------------- |
| id         | uuid | Identificador único do usuário         |
| name       | string  | O nome completo do usuário.                        |
| email     | string| Email do usuário.                     |
| secondEmail | string  | Email secundário do usuário. |
| phone  | string  | Número de telefone do usuário.                        |
| secondPhone  | string    | Número secundário de telefone do usuário. |
| isAdm  | boolean   | Se o usuário é admin. |
| createdAt  | date    | Data de criação do usuário             |
| updatedAt  | date    | Data que o usuário atualizou       |
