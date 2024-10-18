const express = require('express');
const mustacheExpress = require('mustache-express');
const db = require('./db');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views'. __dirname + '/views');
app.use(express.urlencoded({extended: true}));

const formRouter = require('../app_form_db/routers/formRouter');
app.use('/', formRouter);

db.sync();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});