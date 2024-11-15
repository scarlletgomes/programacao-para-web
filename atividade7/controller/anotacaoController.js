const Anotacao = require('./model/anotacao');

function indexView(req, res) {
    res.render('index.html');
}

function muralView(req, res) {

    Anotacao.findAll({
        where: {
            id_usuario: req.session.usuario.id,
            indicador_ativo: 1
        }
    }).then((anotacaos)=>{
        res.render('mural.html', {anotacaos});
    }).catch((erro_recupera_anotacaos)=>{
        res.render('mural.html', {erro_recupera_anotacaos});
    });

    
}

function cadastrarAnotacao(req, res) {
    let anotacao = {
        titulo: req.body.titulo,
        id_usuario: req.session.usuario.id,
        subtitulo: req.body.subtitulo,
        texto: req.body.texto,
        indicador_ativo: 1,
        estilo: req.body.estilo
    }
    
    Anotacao.create(anotacao).then(()=>{
        res.redirect('/mural');
    }).catch((err)=>{
        console.log(err);
        let erro_cadastrar_anotacao = true;
        res.render("mural.html", {erro_cadastrar_anotacao});
    });

}

module.exports = {
    indexView,
    muralView,
    cadastrarAnotacao
}