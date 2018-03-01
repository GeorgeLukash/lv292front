import './style.scss';

import './image.jpg';

import { ColorPickerController } from './color-picker.controller';

export const ColorPicker: angular.IComponentOptions = {
    bindings: {
        outputSelect: '&'
    },
    template: require('./color-picker.component.html'),
    controller: ColorPickerController
};
