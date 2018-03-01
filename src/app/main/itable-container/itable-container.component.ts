import './style.scss';
import {ItableContainerController} from './itable-container.controller';

export const ItableContainer: angular.IComponentOptions = {
    template: require('./itable-container.component.html'),
    controller: ItableContainerController
};
