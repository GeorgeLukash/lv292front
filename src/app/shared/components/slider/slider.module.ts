import * as angular from 'angular';

import { Slider } from './slider.component';

export const sliderModule = angular
    .module('app.components.slider', [])
    .component('slider', Slider)
    .name;
