import * as angular from 'angular';

import { Sidebar } from './sidebar.component';

import {PageListService} from './sidebar.service';

import { SidebarItem } from './sidebar-item.component';

export const sidebarModule = angular
  .module('app.components.sidebar', [])
  .component('sidebar', Sidebar)
  .component('sidebarItem', SidebarItem)
  .service('PageListService', PageListService)
  .name;
