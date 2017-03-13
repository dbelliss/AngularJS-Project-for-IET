import './weather.css';

export const weather = {
  template: require('./weather.html'),
  controller(weatherService) {
    weatherService.getWeather(this);
    this.cityName = '';
    this.weatherList = [];
  }
};
