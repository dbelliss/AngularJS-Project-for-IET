import angular from 'angular';
import {weather} from './app/weather';
import {test} from './app/test';
import './index.css';

export const app = 'app';
/*  eslint angular/di: [2,"array"]    */
angular
  .module(app, ['ngMaterial'])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
  }])
  .component('weather', weather)
  .component('app3', test);
