const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const server = require('express')()
const port = process.env.PORT || 3003

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

const bd = mysql.createConnection({
    host: 'den1.mysql5.gear.host',
    user: 'mydb63',
    password: 'Em6W1_P9a0?P',
    database: 'mydb63'
})

bd.query('SELECT * FROM tasks ORDER BY id_task DESC', (err, result) => {
    console.log(err)
    console.log(result)
})

server.route('/task')
    .get((req, resp)=>{
        bd.query('SELECT * FROM tasks ORDER BY id_task DESC', (err, result) => {
            resp.send(result)
        })
    })
    .post((req, resp)=>{
        req.body.title = req.body.title.replace(/'/g, "").replace(/"/g,'')
        req.body.description = req.body.description.replace(/'/g, "").replace(/"/g,'')
        bd.query(`INSERT INTO tasks (title, description, urgency, due_date) values ('${req.body.title}', '${req.body.description}', ${req.body.urgency}, '${req.body.due_date}')`)
        resp.send('Inserção realizada')
    })
    .put((req, resp)=>{
        req.body.title = req.body.title.replace(/'/g, "").replace(/"/g,'')
        req.body.description = req.body.description.replace(/'/g, "").replace(/"/g,'')
        if(req.body.id === undefined){
            resp.send('Informar id da tarefa')
            console.log('err')
            return  
        }
        bd.query(`UPDATE tasks SET title = '${req.body.title}', description = \'${req.body.description}\' WHERE id_task = ${req.body.id}`)
        resp.send('Alteração realizada')
    })
    .delete((req, resp) => {        
        console.log((req.body))
        if(req.body.id_task === undefined){
            resp.send('Informar id da tarefa')
            console.log('err')
            return  
        }
        bd.query(`DELETE FROM tasks WHERE id_task=${req.body.id_task}`)
        resp.send('Tarefa excluída')
    })

server.listen(port, () => {
    console.log(`Servidor rodando em: localhost:${port}`)
})
