import './style.scss';
import { ColorPickerController } from './color-picker-container.controller';

export const ColorPickerContainer: angular.IComponentOptions = {
    template: require('./color-picker-container.component.html'),
    controller: ColorPickerController
};
