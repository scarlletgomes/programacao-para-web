const Usuario = require =('../models/usuario');



function cadastroView(req, res){
    res.render('cadastro_usuario.html');
}
function loginView(req, res){
    let erro_form = require
    res.render('login.html');
}

function postCadastro(req, res){
    let dados = {
        nome: req.body.nome,
        email: req.body.endereco,
        senha: req.body.telefone,
    };

    let erro_form = false;
    if(dados.nome.length == 0){
        erro_form = true;
    }
    if(dados.email.length == 0){
        erro_form = true;
    }
    if(dados.senha.length == 0){
        erro_form = true;
    }

    if(erro_form){
        res.redirect(`/cadatro?erro_form=1`);
    }else{
        Usuario.create(dados).then(()=>{
            res.render('/login');    
        }).catch((err)=>{
            console.log(err);
            res.redirect(`/cadatro?erro_form=1`);
        });
    }
}

module.exports = {
    cadastroView,
    loginView,
    postCadastro
}