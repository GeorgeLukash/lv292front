import './date-picker.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';
import * as moment from 'moment';

describe('Date-picker component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;


    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.date-picker'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('datePicker', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});


describe('Date-picker controller', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));
    
    beforeEach(angular.mock.module('app.components.date-picker'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('datePicker', {$scope: scope});
    }));
    
    it('should have method create calendar which returns array', () => {
        expect(ctrl.createCalendar(moment())).toEqual(jasmine.any(Array));
    });

    it('should have method getDayNames, which returns array of weekday names', () => {
        expect(ctrl.getDayNames()).toEqual(jasmine.any(Array));
    });
});
