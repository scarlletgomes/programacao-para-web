const { Model } = require("sequelize");

const Usuario = require =('../models/usuario');

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

module.exports = {
    login
}