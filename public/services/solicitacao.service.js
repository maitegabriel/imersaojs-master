angular.module('app')
    .service('SolicitacaoService', SolicitacaoService);

    SolicitacaoService.$inject = ['$http']

function SolicitacaoService ($http) {
    var URL = '/solicitacoes';

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

    service.update = function (id, solicitacao) {
        return $http.put(URL + '/' + id, solicitacao)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (solicitacao) {
        return $http.post(URL, solicitacao)
            .then(function(resp) {
                return resp.data;
            });
    }

}