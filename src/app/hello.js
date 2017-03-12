export const hello = {
  template: require('./hello.html'),
  controller($scope, $http, $log) {
    $scope.hello = 'Hello World!';
    this.successCallback = function (response) {
      $scope.hello = angular.fromJson(response);
      $log.log(angular.fromJson(response));
    };
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=5341704&cnt=2&APPID=b35f2b4ea7c48895bd3d4e23d86e733e').then(this.successCallback, this.successCallback);
  }
};
