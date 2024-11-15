
const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const db = require('./db')

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')



app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))

app.use('/', require('./router/anotacaoRoutes'));
app.use('/', require('./router/usuarioRoutes'));
app.use('/', require('./router/autenticacaoRoutes'));

db.sync(() => console.log(`Banco de dados conectado`));

const app_port = 8080
app.listen(app_port, function () {
    console.log('app rodando na porta ' + app_port)
})
