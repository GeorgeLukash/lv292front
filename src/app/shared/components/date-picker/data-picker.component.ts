import './style.scss';
import { DatePickerController } from './date-picker.controller';

export const DatePicker: angular.IComponentOptions = {
    template: require('./date-picker.component.html'),
    controller: DatePickerController,
    bindings: {
        defaultSelected: '<',
        dateFormat: '@',
        selection: '@',
        openButton: '@',
        outputSelect: '&'
    }
};
