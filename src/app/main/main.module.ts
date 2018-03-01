import * as angular from 'angular';

import { Main } from './main.component';

import { mainRoutes } from './main.config';

import { sidebarModule } from './sidebar/sidebar.module';

import { Header } from './header/header.component';

import { selectorContainerModule } from './selector-container/selector-container.module';

import { sliderContainerModule } from './slider_container/slider_container.module';

import { buttonGroupContainerModule } from './button-group-container/button-group-container.module';

import { itableContainerModule } from './itable-container/itable-container.module';

import { colorPickerContainerModule } from './color-picker-container/color-picker-container.module';

import { datePickerContainerModule } from './date-picker-container/date-picker-container.module';

import { accordionContainerModule } from './accordion-container/accordion-container.module';

import { ApiService } from './service/api.service';

export const mainModule = angular
    .module('app.main', [
        sidebarModule,
        itableContainerModule,
        datePickerContainerModule,
        selectorContainerModule,
        sliderContainerModule,
        colorPickerContainerModule,
        datePickerContainerModule,
        buttonGroupContainerModule,
        accordionContainerModule
    ])
    .component('main', Main)
    .component('header', Header)
    .service('ApiService', ApiService)
    .config(mainRoutes)
    .name;
