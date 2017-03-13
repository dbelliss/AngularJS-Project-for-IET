import angular from 'angular';
import {weather} from './app/weather';
import {test} from './app/test';
import {credits} from './app/credits';
import './index.css';
export const app = 'app';
/*  eslint angular/di: [2,"array"]    */
angular
  .module(app, ['ngMaterial'])
  .controller('AppController', [function () {
    // const vm = this;
    // vm.customers = [
    //   {name: 'Haley'}, {name: 'Ella'}, {name: 'Landon'}, {name: 'John'}
    // ];
    // vm.acceptOffer = function (vm) {
    //   vm.customers = [];
    // };
  }])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .dark()
    .primaryPalette('teal'); // specify primary color, all
  }])
  .component('weather', weather)
  .component('app3', test)
  .component('credits', credits);
