import './style.scss';
import { AccordionController } from './accordion.controller';

export const Accordion: angular.IComponentOptions = {
    bindings: {
        contentData: '<'
    },
    template: require('./accordion.component.html'),
    controller: AccordionController
};
