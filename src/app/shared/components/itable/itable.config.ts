itableRoutes.$inject = ['$stateProvider'];

export function itableRoutes($stateProvider: any) {
  $stateProvider.state('itable', {
    url: '/',
    component: 'itable'
  });
}
