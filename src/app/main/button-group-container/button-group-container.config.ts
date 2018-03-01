buttonGroupContainerRoutes.$inject = ['$stateProvider'];

export function buttonGroupContainerRoutes($stateProvider: any) {
    $stateProvider.state('button-group', {
        url: '/button-group',
        component: 'buttonGroupContainer'
    });
}
