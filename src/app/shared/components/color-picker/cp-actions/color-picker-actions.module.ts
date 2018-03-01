import * as angular from 'angular';
import { ColorPickerActions } from './color-picker-actions.component';

export const colorPickerActions = angular
    .module('app.components.color-picker-actions', [])
    .component('colorPickerActions', ColorPickerActions)
    .name;
