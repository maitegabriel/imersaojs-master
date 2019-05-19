const mongoose = require('mongoose');
const atendimentoModel = mongoose.model('atendimentos');

module.exports = function (app) {
    app.get('/atendimentos', function (req, resp) {
        atendimentoModel.find({}, ['emissao','cliente','pet','itens'], {sort: {emissao: 1}})
            .populate('cliente', 'nome')
            .populate('pet', 'nome')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/atendimentos', function (req, resp) {
        atendimentoModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/atendimentos/:id', function (req, resp) {
        atendimentoModel.findById(req.params.id)
            .populate('cliente')
            .populate('pet')
            .populate('itens.produto')
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.put('/atendimentos/:id', function (req, resp) {
        atendimentoModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.delete('/atendimentos/:id', function (req, resp) {
        atendimentoModel.deleteOne({ '_id': req.params.id })
            .then(
                function () {
                    resp.status(204).send();
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
}