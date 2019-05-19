angular.module('app')
    .controller('SolicitacaoListController', SolicitacaoListController);

    SolicitacaoListController.$inject = ['SolicitacaoService'];

function SolicitacaoListController(SolicitacaoService){
    var vm = this;
    vm.solicitacoes = [];

    function _load() {
        SolicitacaoService.findAll()
            .then(function (dados) {
                vm.solicitacoes = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            SolicitacaoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}