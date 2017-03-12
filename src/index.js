import angular from 'angular';

import {hello} from './app/hello';

import './index.css';

export const app = 'app';

angular
  .module(app, [])
  .component('app', hello);
