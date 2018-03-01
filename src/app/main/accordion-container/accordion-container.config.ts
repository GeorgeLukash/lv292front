accordionContainerRoutes.$inject = ['$stateProvider'];

export function accordionContainerRoutes($stateProvider: any) {
    $stateProvider.state('accordion', {
        url: '/accordion',
        component: 'accordionContainer'
    });
}
