angular.module('app')
    .controller('ClienteFormController', ClienteFormController);

ClienteFormController.$inject = [
    'ClienteService',
    'PetService', 
    '$stateParams',
    '$state'
];

function ClienteFormController (ClienteService, PetService, $stateParams, $state){
    var vm = this;
    vm.cliente = {};
    vm.titulo = 'Novo cliente';

    vm.pets = [];

    PetService.findAll()
        .then(function (data) {
            vm.pets = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando cliente';
        ClienteService.findOne($stateParams.id)
            .then(function (data) {
                vm.cliente = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            ClienteService
                .update($stateParams.id, vm.cliente)
                .then(function() {
                    $state.go('clienteList');
                });
        } else {
            ClienteService
                .insert(vm.cliente)
                .then(function() {
                    $state.go('clienteList');
                });
        }
    }
}