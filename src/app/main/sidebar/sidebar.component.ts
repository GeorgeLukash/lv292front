import './style.scss';

import { SidebarController } from './sidebar.controller';

export const Sidebar: angular.IComponentOptions = {
  template: require('./sidebar.component.html'),
  controller: SidebarController 
};
