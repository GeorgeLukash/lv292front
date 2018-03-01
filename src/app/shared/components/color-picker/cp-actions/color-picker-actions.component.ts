import { ColorPickerActionsController } from './color-picker-actions.controller';
export const ColorPickerActions: angular.IComponentOptions = {
    bindings: {
        onColorChange: '<'
    },
    template: require('./color-picker-actions.component.html'),
    controller: ColorPickerActionsController
};
