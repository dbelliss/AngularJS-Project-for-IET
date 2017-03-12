import angular from 'angular';

import {hello} from './app/hello';
import {test} from './app/test';
import './index.css';

export const app = 'app';

angular
  .module(app, [])
  .component('app2', hello)
  .component('app3', test);
