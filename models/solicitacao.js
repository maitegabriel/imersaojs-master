const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    emissao: {
        type: Date,
        default: Date.now
    },
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    itens: [{
        produto: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'produtos'
        },
        preco: Number,
        quantidade: Number
    }]
});

_model.virtual('total').get(function() {
    return this.itens ? this.itens.reduce((total, itens) => total + (itens.preco * itens.quantidade), 0) : 0;
})

mongoose.model('solicitacoes', _model);