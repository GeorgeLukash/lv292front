import './date-picker-container.module';
import * as angular from 'angular';
import { } from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('Date-picker container component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.date-picker-container'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('datePickerContainer', { $scope: scope });
    }));

    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});
