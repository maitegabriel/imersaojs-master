const mongoose = require('mongoose');
const clienteModel = mongoose.model('clientes');

module.exports = function (app) {
    app.get('/clientes', function (req, resp) {
        clienteModel.find({}, ['nome', 'telefone', 'email', 'pet'], {sort: {nome: 1}})
            .populate('pet', 'nome telefone email')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/clientes', function (req, resp) {
        clienteModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/clientes/:id', function (req, resp) {
        clienteModel.findById(req.params.id)
            .populate('pet')
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
    app.put('/clientes/:id', function (req, resp) {
        clienteModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
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
    app.delete('/clientes/:id', function (req, resp) {
        clienteModel.deleteOne({ '_id': req.params.id })
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