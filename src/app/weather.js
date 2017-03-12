export const weather = {
  template: require('./weather.html'),
  controller($log, $http) {
    this.hello = 'Hello World!';
    this.hello2 = 'Hello World2!';
    this.weatherList = [];
    const rootThis = this;
    this.successCallback = function (response) {
      rootThis.hello2 = angular.fromJson(response).data.list[0].deg;
      rootThis.weatherList = angular.fromJson(response).data;
      $log.log(angular.fromJson(response).data);
      $log.log(angular.fromJson(response).data.list[0].deg);
    };
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=5341704&cnt=2&APPID=b35f2b4ea7c48895bd3d4e23d86e733e').then(this.successCallback, this.successCallback);
  }
};
