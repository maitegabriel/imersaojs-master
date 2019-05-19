const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    documento: {
        type:String,
        required: true
    },
    nome: String,
    sexo: String,
    raca: String,
    idade: String,
    peso: String
});

mongoose.model('pets', _model);