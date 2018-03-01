import * as angular from 'angular';

import { selectorContainerRoutes } from './selector-container.config';

import { SelectorContainer} from './selector-container.component';

import { SelectorService } from './selector-container.service';

export const selectorContainerModule = angular
    .module('app.components.selector-container', [])
    .component('selectorContainer', SelectorContainer)
    .config(selectorContainerRoutes)
    .service('SelectorService', SelectorService)
    .name;
