describe('Slider container component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.main.slider-container'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('sliderContainer', {$scope: scope});
    }));
    
    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});

describe('Slider container controller', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('ui.router'));

    beforeEach(angular.mock.module('app.main.slider-container'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('sliderContainer', {$scope: scope});
        ctrl.$onInit();
    }));

    it('should store array of images', () => {
        expect(ctrl.data).toEqual(jasmine.any(Array));
    });

    it('should store objects in array', () => {
        expect(ctrl.data[0]).toEqual(jasmine.any(Object));
    });

    it('should store timeout number', () => {
        expect(ctrl.timeout).toEqual(jasmine.any(Number));
    });
});

describe('Slider container service', () => {
    let createService: any;
    let service: any;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.main.slider-container'));
    beforeEach(angular.mock.inject(($injector) => {
        createService = () => {
            return $injector.get('SliderContainerService');
        };
        service = createService();
    }));

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have method', () => {
        expect(service.getImages).toBeTruthy();
    });

    it('should return array', () => {
        expect(service.getImages()).toEqual(jasmine.any(Array));
    });

    it('should not be empty array', () => {
        expect(service.getImages().length).toBeGreaterThan(0);
    });
});
