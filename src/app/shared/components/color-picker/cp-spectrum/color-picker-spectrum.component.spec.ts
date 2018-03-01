import './color-picker-spectrum.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('Color-picker Spectrum component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.components.color-picker-spectrum'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => { 
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('colorPickerSpectrum', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});

describe('colorPickerSpectrum controller', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('app.components.color-picker-spectrum'));
    beforeEach(angular.mock.inject(($rootScope, $componentController, $compile) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('colorPickerSpectrum', { $scope: scope });
    }));
    
    it('should exist Click function', () => {
        expect(ctrl.сlick).toBeDefined();
    });

});

describe('ColorPickerSpectrum Service', () => {
    let createService: any;
    let service: any;
    beforeEach(angular.mock.module('app.components.color-picker-spectrum'));
    beforeEach(angular.mock.inject(($injector) => {
        createService = () => {
            return $injector.get('ColorPickerService');
        };
        service = createService();
    }));
    
    it('should exist rgbToHex function', () => {
        expect(service.rgbToHex).toBeDefined();
    });
    
    it('should exist getCursorPosition function', () => {
        expect(service.getCursorPosition).toBeDefined();
    });
    
    it('should exist getColorFromImage function', () => {
        expect(service.getColorFromImage).toBeDefined();
    });

    it('should return an object' , () => {
        expect(service.getCursorPosition(1)).toEqual(jasmine.any(Object));
    });

    it('should return an objext', () => {
        expect(service.getColorFromImage([212, 213, 412])).toEqual(jasmine.any(Object));
    });

    it('should return such hex value', () => {
        expect(service.rgbToHex(20, 79, 173)).toEqual('144FAD');
    });
});
