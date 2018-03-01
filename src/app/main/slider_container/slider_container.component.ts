import './style.scss';

import { SliderContainerController } from './slider_container.controller';

export const SliderContainer: angular.IComponentOptions = {
    template: require('./slider_container.component.html'),
    controller: SliderContainerController
};
