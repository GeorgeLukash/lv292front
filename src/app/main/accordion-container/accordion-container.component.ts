import './style.scss';
import { AccordionContainerController } from './accordion-container.controller';

export const AccordionContainer: angular.IComponentOptions = {
    template: require('./accordion-container.component.html'),
    controller: AccordionContainerController
};
