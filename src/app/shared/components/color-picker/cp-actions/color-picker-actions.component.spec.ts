import './color-picker-actions.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('Color-picker Actions component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.color-picker-actions'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('colorPickerActions', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});

describe('Color-picker Actions controller', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.color-picker-actions'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('colorPickerActions', {$scope: scope});
    }));
    
    it('should exist function $onChanges', () => {
        expect(ctrl.$onChanges).toBeDefined();
    });
});
