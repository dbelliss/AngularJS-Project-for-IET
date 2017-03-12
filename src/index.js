import angular from 'angular';

import {weather} from './app/weather';
import {test} from './app/test';
import './index.css';

export const app = 'app';

angular
  .module(app, [])
  .component('app2', weather)
  .component('app3', test);
