import './weather.css';

export const weather = {
  template: require('./weather.html'),
  controller(weatherService, $log) {
    weatherService.getWeather(this);
    this.cityName = '';
    this.weatherList = [];
    this.x = 0;
    this.update = function () {
      $log.log('hi');
      const temp = angular.copy(this.weatherList.list[0]);
      temp.temp.max = this.x++;
      this.weatherList.list.unshift(temp);
    };
  }
};
