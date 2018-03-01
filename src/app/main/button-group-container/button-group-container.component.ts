import './style.scss';

import { ButtonGroupContainerController } from './button-group-container.controller';

export const ButtonGroupContainer: angular.IComponentOptions = {
    template: require('./button-group-container.component.html'),
    controller: ButtonGroupContainerController
};
