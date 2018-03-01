selectorContainerRoutes.$inject = ['$stateProvider'];

export function selectorContainerRoutes($stateProvider: any) {
    $stateProvider.state('selector', {
        url: '/selector',
        component: 'selectorContainer'
    });
}
