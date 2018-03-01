itableContainerRoutes.$inject = ['$stateProvider'];

export function itableContainerRoutes($stateProvider: any) {
  $stateProvider.state('itable', {
    url: '/itable',
    component: 'itableContainer'
  });
}
