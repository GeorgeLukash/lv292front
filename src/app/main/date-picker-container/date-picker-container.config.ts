datePickerContainerRoutes.$inject = ['$stateProvider'];

export function datePickerContainerRoutes($stateProvider: any) {
    $stateProvider.state('date-picker', {
        url: '/date-picker',
        component: 'datePickerContainer'
    });
}
