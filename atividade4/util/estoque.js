let produtos = []

function criarProdutos (id, nome, qnt){
    var p = {
        id : id,
        nome : nome,
        qnt : qnt
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
    // produtos = produtos.filter((p) => {
    //     let x = p.id != id;
    //     return x;
    // });
    produtos.splice(id);
}

function editarProdutos(qnt){
    produtos.splice(qnt);
}

module.exports = {
    criarProdutos,
    listarProdutos,
    adicionarProdutos,
    removerProdutos,
    editarProdutos
}