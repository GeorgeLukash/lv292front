buttonGroupRoutes.$inject = ['$stateProvider'];

export function buttonGroupRoutes($stateProvider: any) {
    $stateProvider.state('button-group', {
        url: '/',
        component: 'buttonGroup'
    });
}
