angular.module('app')
    .service('PetService', PetService);

    PetService.$inject = ['$http']

function PetService ($http) {
    var URL = '/pets';

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

    service.update = function (id, pet) {
        return $http.put(URL + '/' + id, pet)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (pet) {
        return $http.post(URL, pet)
            .then(function(resp) {
                return resp.data;
            });
    }

}