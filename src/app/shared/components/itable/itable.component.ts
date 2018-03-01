import './style.scss';
import { ItableController } from './itable.controller';

export const itable: angular.IComponentOptions = {
    bindings: {
        tableData: '<',
        textExtended: '<'
    },
    template: require('./itable.component.html'),
    controller: ItableController
};
