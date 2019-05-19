angular.module('app')
    .controller('PetListController', PetListController);

PetListController.$inject = ['PetService'];

function PetListController(PetService){
    var vm = this;
    vm.pets = [];

    function _load() {
        PetService.findAll()
            .then(function (dados) {
                vm.pets = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            PetService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}