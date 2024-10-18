const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views'. __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    let erro_form = req.query.erro_form;
    let nome = req.query.nome;
    let endereco = req.query.endereco;
    let telefone = req.query.telefone;
    let data_agendamento = req.query.data_agendamento;
    res.render('index.html', {erro_form, nome, endereco, telefone, data_agendamento});

});

app.post('/dados', (req, res)=>{
    let dados = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data_agendamento: req.body.data_agendamento
    };

    let erro_form = false;
    if(dados.nome.length == 0){
        erro_form = true;
    }
    if(dados.endereco.length == 0){
        erro_form = true;
    }
    if(dados.telefone.length == 0){
        erro_form = true;
    }
    if(dados.data_agendamento.length == 0){
        erro_form = true;
    }

    if(erro_form){
        res.redirect(`/?erro_form=1&true=${dados.nome}&endereco=${dados.endereco}&telefone=${dados.telefone}&data_agendamento=${dados.data_agendamento}`);
    }else{
        res.render('dados.html', {dados});

    }
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});