import angular from 'angular';
import {weather} from './app/weather';
import {test} from './app/test';
import {credits} from './app/credits';
import './index.css';
export const app = 'app';
/*  eslint angular/di: "off"  */

angular
  .module(app, ['ngMaterial'])
  .service('hexafy', function () {
    this.myFunc = function (x) {
      return x.toString(16);
    };
  })
  .controller('AppController', function (hexafy) {
    const vm = this;
    vm.hex = hexafy.myFunc(255);
  })
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .dark()
    .primaryPalette('teal'); // specify primary color, all
  }])
  .component('weather', weather)
  .component('app3', test)
  .component('credits', credits);
