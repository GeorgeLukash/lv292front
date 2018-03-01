import './style.scss';
import { SelectorController } from './selector.controller';

export const Selector: angular.IComponentOptions = {
    bindings: {
        optionList: '<',
        output: '&'
    },
    template: require('./selector.component.html'),
    controller: SelectorController
};
