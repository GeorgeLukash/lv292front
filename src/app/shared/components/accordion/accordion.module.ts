import * as angular from 'angular';

import 'angular-animate';

import { Accordion } from './accordion.component';

export const accordionModule = angular
    .module('app.components.accordion', ['ngAnimate'])
    .component('accordion', Accordion)    
    .name;
