angular.module('app')
    .controller('AtendimentoListController', AtendimentoListController);

    AtendimentoListController.$inject = ['AtendimentoService'];

function AtendimentoListController(AtendimentoService){
    var vm = this;
    vm.atendimento = [];

    function _load() {
        AtendimentoService.findAll()
            .then(function (dados) {
                vm.atendimentos = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            AtendimentoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}