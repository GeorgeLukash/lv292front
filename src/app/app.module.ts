import * as angular from 'angular';

import uiRouter from '@uirouter/angularjs';

import { appRoutes } from './app.config';

import { AppComponent } from './app.component';

import { appSharedModule } from './shared/shared.module';

import { mainModule } from './main/main.module';

export const root = angular
    .module('app', [
        uiRouter,
        mainModule,
        appSharedModule
    ])
    .component('app', AppComponent)
    .config(appRoutes)
    .name;
