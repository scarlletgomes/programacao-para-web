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


function editarProdutos(id, qtd){
    novaQtd == qtd;
    produtos = produtos.splice(id, 1, novaQtd);
}

module.exports = {
    criarProdutos,
    listarProdutos,
    adicionarProdutos,
    removerProdutos,
    editarProdutos
}