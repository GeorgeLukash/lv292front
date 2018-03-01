import * as angular from 'angular';
import { itable } from './itable.component';

export const itableModule = angular
  .module('app.components.itable', [])
  .component('itable', itable)
  .name;
