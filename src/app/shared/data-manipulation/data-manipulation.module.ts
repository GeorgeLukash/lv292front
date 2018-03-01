import * as angular from 'angular';

import { DataManipulationService } from './data-manipulation.service';
export const dataManipulationModule = angular
    .module('app.shared.dataManipulation', [])
    .service('dataManipulationService', DataManipulationService)
    .name;
