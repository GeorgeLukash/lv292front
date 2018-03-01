import './style.scss';
import { DatePickerInputController } from './dp-input.controller';

export const DatePickerInput: angular.IComponentOptions = {
    template: require('./dp-input.component.html'),
    bindings: {
      selectionMode: '<',
      selectedDate: '<',
      defaultDateFormat: '<',
      defaultSelected: '<',
      openButton: '<',
      showDp: '&'
    },
    controller: DatePickerInputController
};
