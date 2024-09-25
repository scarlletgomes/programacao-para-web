const est = require ('./util/estoque.js');

const express = require ('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Atividade4 - Estoque");
});

app.get('/adicionar/:id/:nome/:qtd', function (req, res){
    let id = req.params.id;
    let nome = req.params.id;
    let qnt = req.qnt;
    let p = estoque.criarProduto(p);
    estoque.adicionarProduto(p);
    res.send(p);
});

app.get('/listar', function(req, res){

})

app.get('/remover/:id', function(req, res){

})

app.get('/editar/:id/:qtd', function(req, res){

})

const PORT = 8080;
//colocar a inicialização da aplicação
app.listen(PORT, ()=>{
    console.log("App rodando na porta " + PORT);
});