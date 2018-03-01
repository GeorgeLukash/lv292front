appRoutes.$inject = ['$locationProvider'];

export function appRoutes($locationProvider: angular.ILocationProvider) {
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
}
