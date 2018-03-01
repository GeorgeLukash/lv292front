import * as angular from 'angular';
import { DatePickerHeader } from './dp-header.component';

export const datePickerHeaderModule = angular
    .module('app.components.date-picker.header', [])
    .component('datePickerHeader', DatePickerHeader)
    .name;
