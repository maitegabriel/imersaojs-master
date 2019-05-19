angular.module('app')
    .controller('ClienteListController', ClienteListController);

ClienteListController.$inject = ['ClienteService'];

function ClienteListController(ClienteService){
    var vm = this;
    vm.clientes = [];

    function _load() {
        ClienteService.findAll()
            .then(function (dados) {
                vm.clientes = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            ClienteService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}