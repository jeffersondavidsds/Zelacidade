const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database      

    })

    await db.exec(`CREATE TABLE IF NOT EXISTS incidentes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo_problema TEXT,           -- O que aconteceu (Buraco, Lixo, Luz, etc)
        localizacao TEXT,             -- Onde aconteceu (Rua, Bairro, Referencia)
        descricao TEXT,               -- Detalhes do problema
        prioridade TEXT,              -- Baixa, Média, Alta, Urgência
        nome_solicitante TEXT,        -- Nome do Solicitante
        contato_solicitante TEXT,     -- Contato do Solicitante (Telefone ou Email)
        data_registro TEXT,           -- Data de Registro do problema
        hora_registro TEXT,           -- Hora de Registro do problema
        imagem_problema TEXT,         --Caminho para imagem do problema (opcional)
        status_resolucao TEXT DEFAULT 'Pendente' -- Se não avisarem o status, banco define como pendente
        )
        `)

        console.log('Banco de dados configurado: A tabela de incidentes foi criada com sucesso!')


        //VERIFICAÇÃO DE DUPLICIDADE DE REGISTRO
        //      SELECIONE a CONTAGEM de TUDO(*) e de o apelido de 'total' da tabela de incidentes

        const checagem = await db.get(`SELECT COUNT(*) AS total FROM incidentes`)

        // condicional ( verificação se e senão (IF e ELSE) )

        if( checagem.total === 0 ) {
            console.log('Inserindo dados')
            await db.exec(`    
        INSERT INTO incidentes
        (tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema)
        VALUES
        ('Iluminação pública', 'Rua das Flores', 'Poste de iluminação pública apagado há vários dias.', 'Média', 'Ana Clara', '(21) 90000-0001', '2026-03-16', '10:21', 'https://itaitinga.ce.gov.br/fotos/165/Img0_600x400.jpg'),
        ('Vazamento de água', 'Rua das Camélias, 52', 'Vazamento de água constante próximo ao bueiro.', 'Alta', 'Julia Martins', '(21) 90000-0002', '2026-03-16', '10:00', 'https://imagens.ebc.com.br/5VbdNmptS8wly0VwAu9HMcS04RM=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/04/28/imagens_maria_julia_nascimento_1.jpeg?itok=sAo96JqF'),
        ('Árvore caída', 'Rua da VNW', 'Árvore caída bloqueando parcialmente a via.', 'Alta', 'Fernanda Kaka', '(21) 90000-0003', '2026-03-15', '07:00', 'https://s3.diario.one/linus/images/c27bd001-a082-44f9-85d8-0fdfdb456a4f.webp'),
        ('Acúmulo de lixo', 'Praça da Matriz, 456', 'Grande quantidade de lixo acumulado na área da praça.', 'Média', 'Felipe Dylon', '(21) 90000-0004', '2026-03-16', '1０:22', 'https://s2-g1.glbimg.com/g6l58FrG-iMjLrilj8PCQhix9Gc=/０x０:１６００x１０６６/９８４x０/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c₀c84a879bd3767₀ae4f538a/internal_photos/bs/２０２３/b/１/pL₀lXlRreslSm８OQDrzg/moradores-de-bairro-em-caucaia-reclamam-de-lixo-nas-ruas..jpeg'),
        ('Assalto', 'Rua １２３, Bairro Vila da Penha, próximo ao Mercado Francisco, Rio de Janeiro', 'Relato de assalto cometido por dois homens em uma motocicleta. Foram levados carteira e bolsa.', 'Alta', 'João Silva', 'joao.silva@email.com', '２０２６-０６-０１', '１８:３０', 'https://img.irroba.com.br/fit-in/６３９x６３９/filters:fill(fff):quality(８０)/universo/catalog/lancamentos-２０２４/bolsa-carteira-couro-legitimo-bubble-preta-e-chocolate-２-１.jpg'),
        ('Vazamento de água', 'Rua das Flores, ４５', 'Possível vazamento na rede de infraestrutura urbana.', 'Média', 'João Batista', '(２１) ９００００-０００５', '２０２６-０３-１７', '０９:１５', 'https://s２-g１.glbimg.com/vqegq₀PwmIJTRf５cd_-cNNRKpg=/₀x₀:１２８₀x９６₀/９８４x₀/smart/filters:strip_icc()/i.s3.glbimg.com/v₁/AUTH_５９edd４₂₂c₀c84a879bd3767₀ae4f538a/internal_photos/bs/２０２₀/w/g/９uI₀WxQPC₂YCLSeWEkMA/vazamento-de-agua-foi-registrado-em-rua-do-batel-em-curitiba-na-manha-desta-segunda-feira-２７-.jpg'),
        ('Buraco na rua', 'Rua Dev', 'Grande buraco formado após fortes chuvas, oferecendo risco para veículos e pedestres.', 'Alta', 'Lúcia Alcântara', '(21) 90000-0006', '2026-02-28', '11:00', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9g_bnV3kLqBH_rX9tKrtDLTph_uTS0O4NA&s'),
        ('Acúmulo de lixo', 'Avenida Ministro Amaral', 'Acúmulo de lixo em frente ao bueiro, dificultando o escoamento da água.', 'Alta', 'Ana Liz', '(21) 90000-0007', '2026-03-16', '10:24', 'https://www.pmerechim.rs.gov.br/noticia/21425/prefeitura-alerta-sobre-descarte-irregular-de-lixo-em-bueiros-e-refora-importncia-da-conscientizacao-da-populacao'),
        ('Buraco na rua', 'Rua Cecília, 23', 'Buraco presente há meses na via, dificultando a passagem de veículos.', 'Alta', 'Diego Pereira', '(21) 90000-0008', '2026-03-16', '10:25', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6c9ZTHxmUHTz32PXrDMeuGI0Y8w-WP-ka4g&s'),
        ('Alagamento', 'Rua Gifone, 325', 'Rua frequentemente alagada durante períodos de chuva intensa.', 'Média', 'Carlos Henrique', '(21) 90000-0009', '2026-03-16', '10:00', 'https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--51c801d9-3137-49c9-9720-83fcc583e837/cidades-franco-1709440294.jpg?quality=90&preferwebp=true&width=1200')
    `)
} else {
    console.log('Dados ja existem, não será necessário inserir novamente.')
}

    // SELECT(Read) - Consultas
    console.log('------TOTAL DE INCIDENTES REGISTRADOS------')
    const todosIncidentes = await db.all(`SELECT * FROM incidentes`)
    console.log(todosIncidentes)


    // Exemplo de consulta específica
    console.log('------FILTRO: CHAMADOR DA ANA CLARA------')
    const chamadosAna = await db.all(`SELECT * FROM incidentes WHERE nome_solicitante = 'Ana Clara'`)
    console.log(chamadosAna)

    // UPDATE - Atualização de dados
    await db.run(`
        UPDATE incidentes
        SET status_resolucao = 'Resolvido'
        WHERE tipo_problema = 'Vazamento de água'
        `)

    await db.run(`DELETE FROM incidentes WHERE status_resolucao = 'Resolvido'`)
    console.log('Registros de status Resolvido, foram excluídos.')


        console.log('------TOTAL DE INCIDENTES REGISTRADOS APÓS ATUALIZAÇÃO E EXCLUSÃO------')
        const resultadoFinal = await db.all(`SELECT * FROM incidentes`)
        console.log(resultadoFinal)


    return db; //A função 'criarBanco' agora entrega a "chave" do banco.

}

// O module.exports cria uma 'ponte' que permite compartilhar funções entre arquivos
// Neste caso ele exporta a função 'criarBanco'.
module.exports = { criarBanco }