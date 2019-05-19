const mongoose = require('mongoose');
const solicitacaoModel = mongoose.model('solicitacoes');

module.exports = function (app) {
    app.get('/solicitacoes', function (req, resp) {
        solicitacaoModel.find({}, ['emissao', 'cliente', 'itens'], {sort: {emissao: 1}})
            .populate('cliente', 'documento nome email')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/solicitacoes', function (req, resp) {
        solicitacaoModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/solicitacoes/:id', function (req, resp) {
        solicitacaoModel.findById(req.params.id)
            .populate('cliente')
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
    app.put('/solicitacoes/:id', function (req, resp) {
        solicitacaoModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
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
    app.delete('/solicitacoes/:id', function (req, resp) {
        solicitacaoModel.deleteOne({ '_id': req.params.id })
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