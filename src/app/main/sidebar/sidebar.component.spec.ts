import * as angular from 'angular';

import './sidebar.module';

import { PageListService } from './sidebar.service';

import {} from 'jasmine';

import 'angular-mocks';

import 'phantomjs-polyfill';

describe('Sidebar component', () => {
  let scope: any;
  let ctrl: any;
  let componentController: any;
  beforeEach(angular.mock.module('app.components.sidebar'));
  beforeEach(angular.mock.inject(($rootScope, $componentController) => {
    scope = $rootScope.$new();
    componentController = $componentController;
    ctrl = componentController('sidebar', {$scope: scope});
    ctrl.$onInit();
  }));
  
  it('should exist', () => {
    expect(ctrl).toBeDefined();
  });

  it('Sidebar component should have allPages property', () => {
    expect(ctrl.allPages).toBeDefined();
  });
});

describe('Sidebar Controller', () => {
  let scope: any;
  let ctrl: any;
  let componentController: any;
  let pagesObject = new PageListService();
  let pagesList = pagesObject.getPages();
  beforeEach(angular.mock.module('app.components.sidebar'));
  beforeEach(angular.mock.inject(($rootScope, $componentController) => {
    scope = $rootScope.$new();
    componentController = $componentController;
    ctrl = componentController('sidebar', {$scope: scope});
    ctrl.$onInit();
  }));
  
  it('should have PageListService imported', () => {
    expect(ctrl.pageListService).toBeDefined();
  });

  it('should have allPages property', () => {
    expect(ctrl.allPages).toBeDefined();
  });

  it('should have an array as allPages property', () => {
    expect(ctrl.allPages).toEqual(jasmine.any(Array));
  });

  it('should have all objects in allPages array', () => {
    pagesList.forEach((page) => {
      expect(page).toEqual(jasmine.any(Object));
    });
  });

  it('should have name property in each object of allPages array', () => {
    pagesList.forEach((page) => {
      expect(Object.keys(page)).toContain('name');
    });
  });

  it('should have url property in each object of allPages array', () => {
    pagesList.forEach((page) => {
      expect(Object.keys(page)).toContain('url');
    });
  });

  it('should have two properties only in each object of allPages array', () => {
    pagesList.forEach((page) => {
      expect(Object.keys(page).length).toEqual(2);
    });
  });

  it('should have name property that matches url property in each object of allPages array', () => {
    pagesList.forEach((page) => {
      let name = page.name.replace(/\s+/g, '-').toLowerCase();
      expect(name).toEqual(page.url);
    });
  });

  it('should have all components included in allPages list (minus code-preview component)', () => {
    let allComponentsLength = angular.module('app.components').requires.length;
    // Temporary fix to remove code-preview component from the list of all components
    let componentsLength = allComponentsLength - 1;
    expect(componentsLength).toEqual(pagesList.length);
  });
});
