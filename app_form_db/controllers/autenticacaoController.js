const Usuario = require('../models/usuario');

async function login(req, res){
    const usuario = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/');
    }
    else{
        res.redirect('/login?erro_login=1');
    }
}

function verificarLogin(req, res, next) {
    if(req.session.autorizado){
        console.log('usuário autorizado');
        next();
    }
    else{
        console.log('usuário NÃO autorizado');
        res.redirect('/login');
    }
}

function sair(req, res){
    req.session.destroy();
    res.redirect('/login');
}

module.exports = {
    login,
    verificarLogin,
    sair
}