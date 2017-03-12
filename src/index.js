import angular from 'angular';
import {weather} from './app/weather';
import {test} from './app/test';

export const app = 'app';
/*  eslint angular/di: [2,"array"]    */
angular
  .module(app, ['ngMaterial'])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .dark();
  }])
  .component('weather', weather)
  .component('app3', test);
