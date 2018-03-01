import * as angular from 'angular';
import { ColorPickerSpectrum } from './color-picker-spectrum.component';
import { ColorPickerService } from './color-picker-spectrum.service';

export const colorPickerSpectrumModule = angular
    .module('app.components.color-picker-spectrum', [])
    .component('colorPickerSpectrum', ColorPickerSpectrum)
    .service('ColorPickerService', ColorPickerService)
    .name;
