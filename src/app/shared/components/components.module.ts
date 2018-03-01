import * as angular from 'angular';

import { buttonGroupModule } from './button-group/button-group.module';

import { codePreviewModule } from './code-preview/code-preview.module';

import { itableModule } from './itable/itable.module';

import { datePickerModule } from './date-picker/date-picker.module';

import { selectorModule } from './selector/selector.module';

import { colorPickerModule } from './color-picker/color-picker.module';

import{ accordionModule } from './accordion/accordion.module';

import { sliderModule } from './slider/slider.module';

export const componentsModule = angular
    .module('app.components', [
        sliderModule,
        itableModule,
        colorPickerModule,
        datePickerModule,
        codePreviewModule,
        buttonGroupModule,
        accordionModule,
        selectorModule
    ])
    .name;
