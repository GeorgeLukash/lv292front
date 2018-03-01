import * as angular from 'angular';
import { buttonGroupContainerRoutes } from './button-group-container.config';
import { ButtonGroupContainer } from './button-group-container.component';
import { ButtonGroupContainerService } from './button-group-container.service';

export const buttonGroupContainerModule = angular
    .module('app.components.button-group-container', [])
    .component('buttonGroupContainer', ButtonGroupContainer)
    .config(buttonGroupContainerRoutes)
    .service('ButtonGroupContainerService', ButtonGroupContainerService)
    .name;
