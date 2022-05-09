# RESTful API de Usuários

## Instalação

```bash
npm install
```

### Inicialização
```bash
npm init
```

## Dependências

```bash
# Nodemon
npm install nodemon -g

# Express
npm install express -g

# Consign
npm install consign --save

# Body-Parser
npm install body-parser --save

# NeDB
npm install nedb --save
```

### Excutando servidor

```bash
npm start
```

## Rotas
Obter todos os usuários:
```bash
GET /users
```

Exemplo de resultado:
```json
{
    "users":[]
}
```

Cadastrar um novo usuário:
```
POST /users
```

Exemplo de resultado:
```json
{
    "_id":"hjkhfui324",
    "name":"João Rangel"
}
```

Obter dados de um usuário:
```bash
GET /users/:id
```

Exemplo de resultado:
```json
{
    "_id":"hjkhfui324",
    "name":"João Rangel"
}
```

Editar um usuário:
```
PUT /users/:id
```

Exemplo de resultado:
```json
{
    "_id":"hjkhfui324"
}
```

Excluir um usuário:
```
DELETE /users/:id
```

Exemplo de resultado:
```json
{
    "_id":"hjkhfui324"
}
```