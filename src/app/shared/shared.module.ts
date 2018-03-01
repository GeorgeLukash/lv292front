import * as angular from 'angular';

import { dataManipulationModule } from './data-manipulation/data-manipulation.module';

import { componentsModule } from './components/components.module';

export const appSharedModule = angular

    .module('app.shared', [
        dataManipulationModule, 
        componentsModule
    ])
    .name;

