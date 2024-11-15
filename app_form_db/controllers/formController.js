const Agendamento = require('../models/agendamento');

function getIndexView (req, res){
    let erro_form = req.query.erro_form;
    let nome = req.query.nome;
    let endereco = req.query.endereco;
    let telefone = req.query.telefone;
    let data_agendamento = req.query.data_agendamento;
    res.render('index.html', {erro_form, nome, endereco, telefone, data_agendamento});
}

function postDados(req, res){
    let dados = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data_agendamento: req.body.data_agendamento
    };

    let erro_form = false;
    if(dados.nome.length == 0){
        erro_form = true;
    }
    if(dados.endereco.length == 0){
        erro_form = true;
    }
    if(dados.telefone.length == 0){
        erro_form = true;
    }
    if(dados.data_agendamento.length == 0){
        erro_form = true;
    }

    if(erro_form){
        res.redirect(`/?erro_form=1&nome=${dados.nome}&data_agendamento=${dados.data_agendamento}&endereco=${dados.endereco}&telefone=${dados.telefone}`);
    }
    else{
        Agendamento.create(dados).then(()=>{
            res.render('dados.html', {dados});
        });
    }
    
}

function getAgendamentosView(req, res){
    Agendamento.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}

module.exports = {
    getIndexView,
    postDados,
    getAgendamentosView
}