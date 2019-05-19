angular.module('app')
    .controller('PetFormController', PetFormController);

PetFormController.$inject = [
    'PetService', 
    '$stateParams', 
    '$state'
];

function PetFormController (PetService, $stateParams, $state){
    var vm = this;
    vm.pet = {};
    vm.titulo = 'Novo pet';

    if ($stateParams.id) {
        vm.titulo = 'Editando pet';
        PetService.findOne($stateParams.id)
            .then(function (data) {
                vm.pet = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            PetService
                .update($stateParams.id, vm.pet)
                .then(function() {
                    $state.go('petList');
                });
        } else {
            PetService
                .insert(vm.pet)
                .then(function() {
                    $state.go('petList');
                });
        }
    }
}