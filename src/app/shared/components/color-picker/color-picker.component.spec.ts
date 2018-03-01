import * as angular from 'angular';

import './color-picker.module';

import {} from 'jasmine';

import 'angular-mocks';

import 'phantomjs-polyfill';


describe('colorPicker component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;
    beforeEach(angular.mock.module('app.components.color-picker'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('colorPicker', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });

});

describe('colorPicker controller', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('app.components.color-picker'));
    beforeEach(angular.mock.inject(($rootScope, $componentController, $compile) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('colorPicker', { $scope: scope });
    }));
    
    it('should exist Click function', () => {
        expect(ctrl.$onInit).toBeDefined();
    });

});
