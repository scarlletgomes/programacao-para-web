let produtos = []

function criarProdutos (id, nome, qtd){
    var p = {
        id : id,
        nome : nome,
        qtd : qtd
    }
    return p;
}

function listarProdutos(){
    return produtos;
}

function adicionarProdutos(p){
    produtos.push(p);
}

function removerProdutos(id){
       produtos = produtos.splice(id);
}


function editarProdutos(id, novaQtd){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id = id){
           produtos[i].qtd = novaQtd;  
        }
    }
}

module.exports = {
    criarProdutos,
    listarProdutos,
    adicionarProdutos,
    removerProdutos,
    editarProdutos
}