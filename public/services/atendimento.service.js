angular.module('app')
    .service('AtendimentoService', AtendimentoService);

    AtendimentoService.$inject = ['$http']

function AtendimentoService ($http) {
    var URL = '/atendimentos';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, atendimento) {
        return $http.put(URL + '/' + id, atendimento)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (atendimento) {
        return $http.post(URL, atendimento)
            .then(function(resp) {
                return resp.data;
            });
    }

}