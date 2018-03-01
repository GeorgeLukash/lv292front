import { ColorPickerSpectrumController } from './color-picker-spectrum.controller';

export const ColorPickerSpectrum: angular.IComponentOptions = {
    bindings: {
        selectColor: '&',
        outputColor: '&'
    },
    controller: ColorPickerSpectrumController,
    template: require('./color-picker-spectrum.component.html')
};
