const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database      

    })

    await db.exec(`CREATE TABLE IF NOT EXISTS incidantes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        tipo_problema TEXT,           -- O que aconteceu (Buraco, Lixo, Luz, etc)
        localizacao TEXT,             -- Onde aconteceu (Rua, Bairro, Referencia)
        prioridade TEXT,              -- Baixa, Média, Alta, Urgência
        descricao TEXT,               -- Detalhes do problema
        data_registro TEXT,           -- Data de Registro do problema
        hora_registro TEXT,           -- Hora de Registro do problema
        nome_solicitante TEXT,        -- Nome do Solicitante
        contato_solicitante TEXT,     -- Contato do Solicitante (Telefone ou Email)
        status_resolucao TEXT DEFAULT 'Pendente' -- Se não avisarem o status, banco define como pendente
        )
        `)

        console.log('Banco de dados configurado: A tabela de incidentes foi criada com sucesso!')

}
criarBanco()