import * as angular from 'angular';
import { DatePickerBody } from './dp-body.component';
import { DatePickerService } from '../date-picker.service';

export const datePickerBodyModule = angular
    .module('app.components.date-picker.body', [])
    .component('datePickerBody', DatePickerBody)
    .service('DatePickerService', DatePickerService)
    .name;
