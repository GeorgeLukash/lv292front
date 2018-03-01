import * as angular from 'angular';
import { itableContainerRoutes } from './itable-container.config';
import { ItableContainer } from './itable-container.component';
import { DataList } from './itable-container.service';

export const itableContainerModule = angular
  .module('app.components.itable-container', [])
  .component('itableContainer', ItableContainer)
  .config(itableContainerRoutes)
  .service('DataList', DataList)
  .name;
