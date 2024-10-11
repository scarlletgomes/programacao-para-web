const estoque = require ('./util/estoque.js');

const express = require ('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Atividade4 - Estoque");
});

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProdutos(id, nome, qtd);
    estoque.adicionarProdutos(p);
    res.send(p);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos()); 
})

app.get('/remover/:id', function(req, res){
    let id = req.params.id;
    estoque.removerProdutos(id);
    res.send(id);
})

app.get('/editar/:id/:qtd', function(req, res){
    let id = req.params.id;
    let novaQtd = req.params.qtd;
    estoque.editarProdutos(id, novaQtd);
    res.send(novaQtd);
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App rodando na porta " + PORT);
});