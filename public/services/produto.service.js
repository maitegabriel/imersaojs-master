angular.module('app')
    .service('ProdutoService', ProdutoService);

ProdutoService.$inject = ['$http']

function ProdutoService ($http) {
    var URL = '/produtos';

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

    service.update = function (id, produto) {
        return $http.put(URL + '/' + id, produto)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (produto) {
        return $http.post(URL, produto)
            .then(function(resp) {
                return resp.data;
            });
    }

}