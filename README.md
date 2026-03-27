# 🏙️ API Zelacidade 🌆
## 📌 Sobre o Projeto

A API **Zelacidade** é um projeto para registrar e gerenciar problemas urbanos como:

- Buracos
- Vazamentos
- Deslizamentos
- Lixos
- Iluminação

Ela permite criar, visualizar, atualizar e deletar ocorrências.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Postman
- Express
- SQlite
- SQlite3

---
## 📦 Instalação

```bash
npm install
```
---

## ▶️ Como Executar

`npm run dev`

Servidor disponível em:
http://localhost:3000

---
## 🗄️ Banco de Dados

O Banco de Dados é criado automáticamente ao iniciar o projeto.

![alt text](image.png)

### 🧾 Tabela

| Campo                | Descrição                     |
|----------------------|-------------------------------|
|id                    | Identificador Único           |
|tipo_problema         | Identificador Único           |
|localizacao           | Localização do problema       |
|descricao             | Descrição do problema         |
|prioridade            | Prioridade do problema        |
|nome_solicitante      | Nome do Solicitante           |
|contato_solicitante   | Contato do solicitante        |
|data_registro         | Data de Registro do problema  |
|hora_registro         | Hora de Registro do problema  |
|imagem_problema       | Imagem do problema            |
|status_resolucao      | Status ( padrão: Pendente )   |

## 🔗 Endpoints

### Rota Inicial
```http
GET /
```
Retorna uma página HTML simples com integrações da API

---

### Rota para listar todos os incidentes

```http
GET /incidentes
```
Retorna todos os registros do banco

### Rota para buscar um incidente por ID

```http
GET /incidentes/:id
```
Exemplo:
```
/incidentes/1
```

### Rota para criar um novo incidente

```http
POST /incidentes
```

### Body(JSON):

```json
{
    "tipo_problema": "Queda de Árvore",
    "localizacao": "Praça da Liberdade, 210",
    "descricao": "Árvore grande caiu sobre a fiação",
    "prioridade": "Alta",
    "nome_solicitante": "Joao do Pé de Feijão",
    "contato_solicitante": "21 4002-8922",
    "data_registro": "23/03/2026",
    "hora_registro": "10:17",
    "imagem_problema": "https://arvoresdesaopaulo.wordpress.com/wp-content/uploads/2011/01/rua-arborizada-em-sc3a3o-paulo-caos-ac3a9reo-foto-de-ricardo-cardim-direitos-reservados.jpg"
}

```

### Rota para atualizar um incidente

```http
PUT /incidentes/:id
```
#### Body(JSON):

```json
{
    "descricao": "Foi retirada a arvore de cima da fiação porém deixaram o tronco na rua",
    "prioridade": "Urgente",
    "status_resolucao": "Em Análise",
    "imagem_problema": "https://imgs.search.brave.com/tFvNRut-Y8uAa1d6yhiIAUv_eZOJJ0jTQgJHWaL3wmA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MjUvMDEvMDkvMTI2/NDI2OTUwMS13cjZ0/eTVxZmlqY2czYzUz/eGc3aHpkeG1zdS5q/cGc"
}
```

### Rota para deletar

```http
DELETE /incidente/:id
```

## 🔐 Segurança
A API utiliza `?` nas queries SQL:
```sql
WHERE id = ?
```

Isso evita o SQL Injection

---

## 📚 Conceitos

- CRUD (CREATE, READ, UPDATE, DELETE)
- Rotas com Express
- Métodos/Verbos http (GET, POST, PUT, DELETE)
- Banco de Dados SQLite
- SQL básico
- Uso de `req.params` e `req.body`

## ❗ Observações
- O banco é criado automaticamente
- Dados iniciais são inseridos apenas se estiver vazio
- A API pode ser testada com Postman

---

## 👩‍💻 Projeto Educacional

Este projeto foi desenvolvido para fins de estudo back-end com NODE.js

<!--
## Esses emojis é um padrão em praticamente TODO README:
## 🚀 Nome da API / Projeto
## 📌 Sobre o Projeto
## 🎯 Objetivo
## 🛠️ Tecnologias
## 📦 Instalação
## ▶️ Como Executar
## ⚙️ Configurações
## 🗄️ Banco de Dados
## 🔗 Endpoints
## 🔐 Segurança
## 📚 Conceitos
## 💡Dicas / Melhorias
## 👩‍💻 Autor
---
## 📖 Descrição
## 🔧 Ferramentas
## 💻 Ambiente
## 📊 Dados
## 🧾 Tabela
## 📡 Requisições
## 📥 Entrada de dados
## 📤 Saída de dados
## 🚫 Bloqueios / proteção
## 🧠 Aprendizado
## 🎓 Educacional
## ⚠️ Atenção
## ❗Importante
## 🤝 Contribuição
## 📄 Licença


>