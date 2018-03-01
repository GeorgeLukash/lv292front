import * as angular from 'angular';

import { ButtonGroup } from './button-group.component';

export const buttonGroupModule = angular
    .module('app.components.button-group', [])
    .component('buttonGroup', ButtonGroup)
    .name;
