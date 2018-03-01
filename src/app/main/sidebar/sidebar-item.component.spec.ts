import * as angular from 'angular';

import './sidebar.module';

import {} from 'jasmine';

import 'angular-mocks';

import 'phantomjs-polyfill';

describe('Sidebar-item component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;
    beforeEach(angular.mock.module('app.components.sidebar'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('sidebarItem', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});
