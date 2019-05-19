const mongoose = require('mongoose');

function database(uri) {
    mongoose.connect(uri);
    mongoose.connection.on('connected', function() {
        console.log('Conectado ao MongoDB em ', uri);
    });
    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB');
    });
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Aplicação terminada, conexão com o MongoDB encerrada com sucesso!');
            process.exit(0);
        });
    });
}

module.exports = database;