angular.module('app')
    .controller('AtendimentoFormController', AtendimentoFormController);

AtendimentoFormController.$inject = [
    'AtendimentoService',
    'ClienteService',
    'PetService',
    'ProdutoService',
    '$stateParams',
    '$state'
];

function AtendimentoFormController(AtendimentoService, ClienteService, PetService, ProdutoService, $stateParams, $state) {
    var vm = this;
    vm.atendimento = {};
    vm.titulo = 'Novo atendimento';

    vm.clientes = [];
    vm.pets = [];
    vm.produtos = [];

    ClienteService.findAll()
        .then(function (data) {
            vm.clientes = data;
        });
    PetService.findAll()
        .then(function (data) {
            vm.pets = data;
        });
    ProdutoService.findAll()
        .then(function (data) {
            vm.produtos = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando atendimento';
        AtendimentoService.findOne($stateParams.id)
            .then(function (data) {
                vm.atendimento = data;
            });
    }

    vm.save = function () {
        if ($stateParams.id) {
            AtendimentoService
                .update($stateParams.id, vm.solatendimentoicitacao)
                .then(function () {
                    $state.go('atendimentoList');
                });
        } else {
            AtendimentoService
                .insert(vm.atendimento)
                .then(function () {
                    $state.go('atendimentoList');
                });
        }
    }

    vm.addItem = function () {
        vm.atendimento.itens = vm.atendimento.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function () {
        if (vm.indexSelecionado) {
            vm.atendimento.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.atendimento.itens.push(vm.itemSelecionado);
        }

    }
}