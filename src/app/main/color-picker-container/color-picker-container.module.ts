import * as angular from 'angular';

import { colorPickerContainerRoutes } from './color-picker-container.config';

import { ColorPickerContainer } from './color-picker-container.component';

import { ColorPickerContainerService } from './color-picker-container.service';

export const colorPickerContainerModule = angular
    .module('app.components.color-picker-container', [])
    .component('colorPickerContainer', ColorPickerContainer)
    .config(colorPickerContainerRoutes)
    .service('ColorPickerContainerService', ColorPickerContainerService)
    .name;
