import './button-group-container.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('Button group container component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.button-group-container'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('buttonGroupContainer', {$scope: scope});
        ctrl.$onInit();
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
    it('Shoud contain array with objects', () => {
        expect(ctrl.buttons).toEqual(jasmine.any(Array));
    });
    it('Shoud contain objects included in the array', () => {
        expect(ctrl.buttons[2]).toEqual(jasmine.any(Object));
    });
});
