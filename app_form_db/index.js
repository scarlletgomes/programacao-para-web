const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db = require('./db');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.use(session({  
    secret: 'secrect-token',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
}));

const formRouter = require('./routers/formRouter');
const usuarioRouter = require('./routers/usuarioRouter');
const autenticacaoRouter = require('./routers/autenticacaoRouter');
app.use('/', formRouter);
app.use('/', usuarioRouter);
app.use('/', autenticacaoRouter);



db.sync();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});