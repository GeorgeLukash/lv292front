import * as angular from 'angular';
import { ColorPicker } from './color-picker.component';
import { ColorPickerSpectrum } from './cp-spectrum/color-picker-spectrum.component';
import { ColorPickerActions } from './cp-actions/color-picker-actions.component';
import { ColorPickerService } from './cp-spectrum/color-picker-spectrum.service';

export const colorPickerModule = angular
    .module('app.components.color-picker', [])
    .service('ColorPickerService', ColorPickerService)
    .component('colorPicker', ColorPicker)
    .component('colorPickerActions', ColorPickerActions)
    .component('colorPickerSpectrum', ColorPickerSpectrum)
    .name;
