import './style.scss';
import { SelectorContainerController } from './selector-container.controller';
export const SelectorContainer: angular.IComponentOptions = {
    template: require('./selector-container.component.html'),
    controller: SelectorContainerController
};
