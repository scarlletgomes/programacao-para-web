const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views'. __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    let erro_form = req.query.erro_form;
    res.render('index.html', {erro_form});

});

app.post('/dados', (req, res)=>{
    let dados = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        descricao: req.body.descricao
    };

    let erro_form = false;
    if(dados.nome.length == 0){
        erro_form = true;
    }
    if(dados.data_nascimento.length == 0){
        erro_form = true;
    }
    if(dados.descricao.length == 0){
        erro_form = true;
    }

    if(erro_form){
        res.redirect('/?erro_form=true');
    }else{
        res.render('dados.html', {dados});

    }
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});