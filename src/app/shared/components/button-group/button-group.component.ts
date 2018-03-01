import './style.scss';
import { ButtonGroupController } from './button-group.controller';

export const ButtonGroup: angular.IComponentOptions = {
    bindings: {
        buttonData: '<',
        buttonInfo: '&'
    },
    template: require('./button-group.component.html'),
    controller: ButtonGroupController
};
