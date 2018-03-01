import * as angular from 'angular';

import { accordionContainerRoutes } from './accordion-container.config';

import { AccordionContainer } from './accordion-container.component';

import { ContentDataService } from './service/content.service';

export const accordionContainerModule = angular
    .module('app.components.accordion-container', [])
    .component('accordionContainer', AccordionContainer)
    .config(accordionContainerRoutes)
    .service('ContentDataService', ContentDataService)
    .name;
