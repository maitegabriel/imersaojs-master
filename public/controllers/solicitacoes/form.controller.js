angular.module('app')
    .controller('SolicitacaoFormController', SolicitacaoFormController);

SolicitacaoFormController.$inject = [
    'SolicitacaoService', 
    'ClienteService',
    'ProdutoService',
    '$stateParams', 
    '$state'
];

function SolicitacaoFormController (SolicitacaoService, ClienteService, ProdutoService, $stateParams, $state){
    var vm = this;
    vm.solicitacao = {};
    vm.titulo = 'Nova solicitação';

    vm.clientes = [];
    vm.produtos = [];

    ClienteService.findAll()
        .then(function (data) {
            vm.clientes = data;
        });
    ProdutoService.findAll()
        .then(function (data) {
            vm.produtos = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando solicitação';
        SolicitacaoService.findOne($stateParams.id)
            .then(function (data) {
                vm.solicitacao = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            SolicitacaoService
                .update($stateParams.id, vm.solicitacao)
                .then(function() {
                    $state.go('solicitacaoList');
                });
        } else {
            SolicitacaoService
                .insert(vm.solicitacao)
                .then(function() {
                    $state.go('solicitacaoList');
                });
        }
    }

    vm.addItem = function() {
        vm.solicitacao.itens = vm.solicitacao.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function() {
        if (vm.indexSelecionado) {
            vm.solicitacao.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.solicitacao.itens.push(vm.itemSelecionado);
        }
        
    }
}