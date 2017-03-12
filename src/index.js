import angular from 'angular';
import materialConfig from './material';
import {weather} from './app/weather';
import {test} from './app/test';
import './index.css';

export const app = 'app';

angular
  .module(app, ['ngMaterial'])
  .config(materialConfig)
  .component('weather', weather)
  .component('app3', test);
