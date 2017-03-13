import angular from 'angular';
import {weather} from './app/weather';
import {test} from './app/test';
import {credits} from './app/credits';
import './index.css';
export const app = 'app';
/*  eslint angular/di: "off"  */

angular
  .module(app, ['ngMaterial'])
  .service('weatherService', function ($http, $log) {
    this.getWeather = function (rootThis) {
      this.successCallback = function (response) {
        rootThis.cityName = angular.fromJson(response).data.city.name;
        rootThis.weatherList = angular.fromJson(response).data;
        $log.log(angular.fromJson(response).data);
        for (let i = 0; i < rootThis.weatherList.list.length; i++) {
          $log.log(i);
          rootThis.weatherList.list[i].image = 'http://openweathermap.org/img/w/' + rootThis.weatherList.list[i].weather[0].icon + '.png';
          $log.log(rootThis.weatherList.list[i].image);
        }
      };
      $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=5341704&cnt=7&APPID=b35f2b4ea7c48895bd3d4e23d86e733e').then(this.successCallback, this.successCallback);
    };
  })
  .controller('AppController', function () {
    const vm = this;
    vm.hex = (255);
  })
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .dark()
    .primaryPalette('teal'); // specify primary color, all
  }])
  .component('weather', weather)
  .component('app3', test)
  .component('credits', credits);
