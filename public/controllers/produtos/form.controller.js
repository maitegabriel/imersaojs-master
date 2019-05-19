angular.module('app')
    .controller('ProdutoFormController', ProdutoFormController);

ProdutoFormController.$inject = [
    'ProdutoService', 
    '$stateParams', 
    '$state'
];

function ProdutoFormController (ProdutoService, $stateParams, $state){
    var vm = this;
    vm.produto = {};
    vm.titulo = 'Novo produto';

    if ($stateParams.id) {
        vm.titulo = 'Editando produto';
        ProdutoService.findOne($stateParams.id)
            .then(function (data) {
                vm.produto = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            ProdutoService
                .update($stateParams.id, vm.produto)
                .then(function() {
                    $state.go('produtoList');
                });
        } else {
            ProdutoService
                .insert(vm.produto)
                .then(function() {
                    $state.go('produtoList');
                });
        }
    }
}