const { Module } = require('module');
const Sequelize = require('sequelize');
const db = require('../db');

const Agendamento = db.define('agendamento',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_agendamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Agendamento;
