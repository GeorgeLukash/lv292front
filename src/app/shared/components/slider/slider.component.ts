import './style.scss';
import { SliderController } from './slider.controller';

export const Slider: angular.IComponentOptions = { 
    bindings: {
        imagesData: '<',
        timeout: '<',
        getName: '&'
    },
    template: require('./slider.component.html'),
    controller: SliderController,
    controllerAs: '$ctrl'
};
