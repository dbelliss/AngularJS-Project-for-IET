import './weather.css';

export const weather = {
  template: require('./weather.html'),
  controller(weatherService, $log) {
    weatherService.getWeather(this);
    this.cityName = '';
    this.weatherList = [];
    this.x = 0;
    this.activities = [];
    this.update = function () {
      $log.log('hi');
      $log.log(this.activities);
      const temp = angular.copy(this.activities[0]);
      // temp.temp.max = this.x++;
      this.activities.unshift(temp);
    };
  }
};
