const express = require('express')
const { criarBanco } = require('./database')

const app = express()


app.use(express.json()) // Habilita o Express para entender requisições com corpo em JSON

app.get('/', (req, res) => {
    res.send(`
        <body>
        <head>
        <title>Zelacidade - Gestão de Problemas Urbanos</title>
        </head>
        <h1>Bem vindo ao Zelacidade!</h1>
        <h2>Gestão de Problemas Urbanos</h2>
        <p>Endpoint que leva aos incidentes cadastrados: /incidentes</p>
        <button onclick="window.location.href='/incidentes'">Ver Incidentes</button>
        
        </body>
        `)

    
})

app.get('/incidentes', async (req, res) => {
    const db = await criarBanco() // Acessa o Banco de Dados
    const incidentes = await db.all(`SELECT * FROM incidentes`) // Consulta SQL para selecionar todos os incidentes
    res.json(incidentes) // Envia 
})

const PORT = 3000
app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)

})
