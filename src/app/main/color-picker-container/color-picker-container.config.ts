colorPickerContainerRoutes.$inject = ['$stateProvider'];

export function colorPickerContainerRoutes($stateProvider: any) {
    $stateProvider.state('color-picker', {
        url: '/color-picker',
        component: 'colorPickerContainer'
    });
}
