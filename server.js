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


app.get('/incidentes/:id', async (req, res) => {
    const { id } = req.params
    const db = await criarBanco() // Espera o acesso ao Banco
    const incidenteEspecifico = await db.all(`SELECT * FROM incidentes WHERE id = ?`, [id]) // Consulta o SQL para selecionar o incidente específico com baso no ID fornecido )
    res.json(incidenteEspecifico) // Envia o incidente específico como resposta Json
})

// ROTA POST: Define uma rota do tipo POST para endpoint '/incidentes'


    app.post('/incidentes', async (req, res) => {
    const {tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema} = req.body

    const db = await criarBanco()
    await db.run(`INSERT INTO incidentes (tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema])
    
    res.send(`Incidente novo registrado: ${tipo_problema} no nome de ${nome_solicitante} Telefone ${contato_solicitante} na data ${data_registro} e na hora ${hora_registro} - ${imagem_problema}`)
    
})