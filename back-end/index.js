const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const server = require('express')()
const port = 3003

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

const bd = mysql.createConnection({
    hosr: 'localhost',
    user: 'task',
    password: '',
    database: 'task_manager'
})

server.route('/task')
    .get((req, resp)=>{
        bd.query('SELECT * FROM tasks', (err, result) => {
            resp.send(result)
        })
    })
    .post((req, resp)=>{
        resp.send(req.body)
        console.log(req.body.K1)
    })
    .put((req, resp)=>{
        resp.send('Changing books')
    })

server.listen(port, () => {
    console.log(`Servidor rodando em: localhost:${port}`)
})
