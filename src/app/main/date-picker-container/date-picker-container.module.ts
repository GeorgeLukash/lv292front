import * as angular from 'angular';

import { datePickerContainerRoutes } from './date-picker-container.config';
import { DatePickerContainer } from './date-picker-container.component';
import { DatePickerContainerService } from './date-picker-container.service';

export const datePickerContainerModule = angular
    .module('app.components.date-picker-container', [])
    .component('datePickerContainer', DatePickerContainer)
    .config(datePickerContainerRoutes)
    .service('DatePickerContainerService', DatePickerContainerService)
    .name;
