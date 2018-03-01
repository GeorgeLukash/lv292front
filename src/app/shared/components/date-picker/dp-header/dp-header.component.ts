import './style.scss';

import { DatePickerHeaderController } from './dp-header.controller';

export const DatePickerHeader: angular.IComponentOptions = {
    template: require('./dp-header.component.html'),
    bindings: {
        date: '<',
        monthSwitch: '&'
    },
    controller: DatePickerHeaderController
};
