import * as angular from 'angular';

import { Selector } from './selector.component';

export const selectorModule = angular
    .module('app.components.selector', [])
    .component('selector', Selector)
    .name;
