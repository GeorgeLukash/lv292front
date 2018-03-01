import './style.scss';

import { DatePickerBodyController } from './dp-body.controller';

export const DatePickerBody: angular.IComponentOptions = {
    template: require('./dp-body.component.html'),
    bindings: {
        date: '<',
        daysArray: '<',
        outputDate: '&',
        selectionMode: '<',
        defaultDateFormat: '<',
        defaultSelected: '<'
    },
    controller: DatePickerBodyController
};
