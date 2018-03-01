import * as angular from 'angular';

import { DatePicker } from './data-picker.component';
import { DatePickerService } from './date-picker.service';
import { datePickerInputModule } from './dp-input/dp-input.module';
import { datePickerHeaderModule } from './dp-header/dp-header.module';
import { datePickerBodyModule } from './dp-body/dp-body.module';

export const datePickerModule = angular
    .module('app.components.date-picker', [
        datePickerInputModule,
        datePickerHeaderModule,
        datePickerBodyModule
    ])
    .component('datePicker', DatePicker)
    .service('DatePickerService', DatePickerService)
    .name;
