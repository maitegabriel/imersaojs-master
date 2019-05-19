const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    documento: {
        type:String,
        required: true
    },
    nome: String,
    email: String,
    telefone: String,
    pet: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'pets'
    }
});

mongoose.model('clientes', _model);