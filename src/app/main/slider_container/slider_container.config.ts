sliderContainerRoutes.$inject = ['$stateProvider'];

export function sliderContainerRoutes($stateProvider: any) {
    
    $stateProvider.state('slider', {
        url: '/slider',
        component: 'sliderContainer'
    });
}
