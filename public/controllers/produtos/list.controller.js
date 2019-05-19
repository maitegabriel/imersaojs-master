angular.module('app')
    .controller('ProdutoListController', ProdutoListController);

ProdutoListController.$inject = ['ProdutoService'];

function ProdutoListController(ProdutoService){
    var vm = this;
    vm.produtos = [];

    function _load() {
        ProdutoService.findAll()
            .then(function (dados) {
                vm.produtos = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            ProdutoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}