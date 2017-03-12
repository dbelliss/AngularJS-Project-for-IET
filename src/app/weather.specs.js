import angular from 'angular';
import 'angular-mocks';
import {weather} from './weather';

describe('weather component', () => {
  beforeEach(() => {
    angular
      .module('fountainHello', ['app/weather.html'])
      .component('fountainHello', hello);
    angular.mock.module('fountainHello');
  });
  it('should render This is the weather', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('This is the weather.');
  }));
});
