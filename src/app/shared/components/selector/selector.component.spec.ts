import './selector.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('Selector component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;


    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.selector'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('selector', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});
