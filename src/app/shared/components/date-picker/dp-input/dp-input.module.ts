import * as angular from 'angular';
import { DatePickerInput } from './dp-input.component';

export const datePickerInputModule = angular
    .module('app.components.date-picker.input', [])
    .component('datePickerInput', DatePickerInput)
    .name;
