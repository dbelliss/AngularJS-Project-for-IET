export const weather = {
  template: require('./weather.html'),
  controller($log, $http) {
    this.hello = 'Hello World!';
    this.hello2 = 'Hello World2!';
    this.cityName = '';
    this.weatherList = [];
    const rootThis = this;
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
  },
  config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
  }
};
