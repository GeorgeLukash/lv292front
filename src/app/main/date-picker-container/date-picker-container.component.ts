import './style.scss';
import { DatePickerContainerController } from './date-picker-container.controller';

export const DatePickerContainer: angular.IComponentOptions = {
    template: require('./date-picker-container.component.html'),
    controller: DatePickerContainerController
};
