describe('Slider component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;

    beforeEach(angular.mock.module('app.components.slider'));
    beforeEach(angular.mock.inject(($rootScope, $componentController, $compile) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('slider', { $scope: scope });
    }));

    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });
});

describe('Slider controller', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;
    let parentTemplate: any;

    beforeEach(angular.mock.module('app.components.slider'));
    beforeEach(angular.mock.inject(($rootScope, $componentController, $compile) => {
        scope = $rootScope.$new();
        parentTemplate = angular.element(`<slider timeout="10000" images-data="['firstImage', 'secondImage']"></slider>`);
        parentTemplate = $compile(parentTemplate)(scope);        
        scope.$apply();

        componentController = $componentController;
        ctrl = componentController('slider', {$scope: scope});
    }));

    it('should exist previousSlide method', () => {
        expect(ctrl.previousSlide).toBeDefined();
    });

    it('should exist nextSlide method', () => {
        expect(ctrl.nextSlide).toBeDefined();
    });

    it('should exist autoPlay method', () => {
        expect(ctrl.autoPlay).toBeDefined();
    });

    it('should exist stopPlay method', () => {
        expect(ctrl.stopPlay).toBeDefined();
    });

    it('should receive timeout value', () => {
        expect(parentTemplate.find('.autoplay').length).toBeGreaterThan(0);
    });

    it('should receive images array', () => {
        expect(parentTemplate.find('.slide').length).toBeGreaterThan(0);
    });
});

