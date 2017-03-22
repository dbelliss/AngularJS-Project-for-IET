import './weather.css';

export const weather = {
  template: require('./weather.html'),
  controller(weatherService) {
    weatherService.getWeather(this);
    this.cityName = '';
    this.weatherList = [];
    this.activities = [];
    this.update = function () {
      weatherService.getWeather(this);
    };
  }
};
