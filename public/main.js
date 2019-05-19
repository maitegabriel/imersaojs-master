angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'clienteList',
            url: '/clientes',
            templateUrl: '/partials/clientes/list.html',
            controller: 'ClienteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteNovo',
            url: '/clientes/novo',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteEditar',
            url: '/clientes/:id',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'petList',
            url: '/pets',
            templateUrl: '/partials/pets/list.html',
            controller: 'PetListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'petNovo',
            url: '/pets/novo',
            templateUrl: '/partials/pets/form.html',
            controller: 'PetFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'petEditar',
            url: '/pets/:id',
            templateUrl: '/partials/pets/form.html',
            controller: 'PetFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'produtoList',
            url: '/produtos',
            templateUrl: '/partials/produtos/list.html',
            controller: 'ProdutoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'produtoNovo',
            url: '/produtos/novo',
            templateUrl: '/partials/produtos/form.html',
            controller: 'ProdutoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'produtoEditar',
            url: '/produtos/:id',
            templateUrl: '/partials/produtos/form.html',
            controller: 'ProdutoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'solicitacaoList',
            url: '/solicitacoes',
            templateUrl: '/partials/solicitacoes/list.html',
            controller: 'SolicitacaoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'solicitacaoNovo',
            url: '/solicitacoes/novo',
            templateUrl: '/partials/solicitacoes/form.html',
            controller: 'SolicitacaoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'solicitacaoEditar',
            url: '/solicitacoes/:id',
            templateUrl: '/partials/solicitacoes/form.html',
            controller: 'SolicitacaoFormController',
            controllerAs: 'vm'
        })        
        .state({
            name: 'atendimentoList',
            url: '/atendimentos',
            templateUrl: '/partials/atendimentos/list.html',
            controller: 'AtendimentoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'atendimentoNovo',
            url: '/atendimentos/novo',
            templateUrl: '/partials/atendimentos/form.html',
            controller: 'AtendimentoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'atendimentoEditar',
            url: '/atendimentos/:id',
            templateUrl: '/partials/atendimentos/form.html',
            controller: 'AtendimentoFormController',
            controllerAs: 'vm'
        });
}
