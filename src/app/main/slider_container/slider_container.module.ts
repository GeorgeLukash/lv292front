import * as angular from 'angular';

import { sliderContainerRoutes } from './slider_container.config';

import { SliderContainer } from './slider_container.component';

import { SliderContainerService } from './slider_container.service';

export const sliderContainerModule = angular
    .module('app.main.slider-container', [])
    .component('sliderContainer', SliderContainer)
    .config(sliderContainerRoutes)
    .service('SliderContainerService', SliderContainerService)
    .name;
