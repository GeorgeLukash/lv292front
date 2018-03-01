import './button-group.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('Button group component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;


    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.button-group'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('buttonGroup', {$scope: scope});
        ctrl.$onInit();
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
    it ('should exist function getNameColor', () => {
        expect(ctrl.getNameColor).toBeDefined();
    });
});

