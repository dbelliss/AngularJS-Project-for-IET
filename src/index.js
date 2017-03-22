import angular from 'angular';
import {weather} from './app/weather';
import {test} from './app/test';
import {credits} from './app/credits';
import './index.css';
export const app = 'app';
/*  eslint angular/di: "off"  */
/* eslint no-unused-vars: "off" */
/* eslint prefer-arrow-callback: "off" */

angular
  .module(app, ['ngMaterial'])
  .directive('ngTest', function ($log) {
    return {
      restrict: 'A',
      template: '<h5>Humidity: {{forecast.humidity}}%</h5>'
    };
  })
  .service('weatherService', function ($http, $log) {
    this.getWeather = function (rootThis) {
      this.successCallback = function (response) {
        rootThis.cityName = angular.fromJson(response).data.city.name;
        rootThis.weatherList = angular.fromJson(response).data;
        for (let i = 0; i < rootThis.weatherList.list.length; i++) {
          // $log.log(i);
          rootThis.weatherList.list[i].image = 'http://openweathermap.org/img/w/' + rootThis.weatherList.list[i].weather[0].icon + '.png';
          // $log.log(rootThis.weatherList.list[i].image);
        }
    // Creating aggiefeed data to send
        const activity = {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/1/15/OpenWeatherMap_logo.png',
          actor: {
            objectType: 'department',
            displayName: 'all',
            image: {
              color: '#ffffff'
            },
            author: {
              id: 1,
              displayName: 'Open Weather'
            }
          },
          verb: 'post',
          title: 'Daily Forecast',
          generator: {
            id: '5'
          },
          object: {
            ucdSrcld: 6,
            objectType: 'notification',
            content: 'The highest temperature will be ' + rootThis.weatherList.list[0].temp.max + '\n The lowest temperature will be ' + rootThis.weatherList.list[0].temp.min + '\nOverall, ' + rootThis.weatherList.list[0].weather[0].description,
            contentImage: {
              dimensions: {
                normal: {
                  url: rootThis.weatherList.list[0].image,
                  width: 400,
                  height: 300
                }
              },
              source: 'Open Weather'
            },
            ucdEdusModel: {
              url: 'http://api.openweathermap.org/data/2.5/forecast/daily?id=5341704&units=imperial&cnt=7&APPID=b35f2b4ea7c48895bd3d4e23d86e733e',
              urlDisplayName: 'Daily forecast for Davis',
              event: {
                hasStartTime: false,
                location: 'Davis',
                startDate: 'dsajdkhsadhaskdjhsaldhska',
                endDate: null,
                isAllDay: true
              }
            },
            location: {
              displayName: 'Davis',
              geo: {
                latitude: '38.5382',
                longitude: '-121.7617'
              },
              geometry: {
                type: 'Point',
                coordinates: [-121.7617, 38.5382]
              }
            }
          },
          to: {
            id: 'public',
            g: true,
            i: false
          },
          ucdEdusMeta: {
            labels: ['weather'],
            startDate: 'dsadsfdsafsdafdasfasdf',
            endDate: 'dsahfjkdhsflkjhasfk'
          }
        };
        $log.log(activity);
      };
      $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=5341704&cnt=7&units=imperial&APPID=b35f2b4ea7c48895bd3d4e23d86e733e').then(this.successCallback, this.successCallback);
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
