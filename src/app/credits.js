import './credits.css';

export const credits = {
  template: require('./credits.html'),
  controller() {
    this.path = './app/images/';
    this.fileNames = [
      'angular-logo.svg',
      'yeoman-logo.png',
      'fountain-logo.png',
      'gulp-logo.png',
      'babel-logo.png',
      'open-weather-map-logo.png'
    ];
    this.source = [
      'https://angularjs.org/',
      'http://yeoman.io/',
      'https://github.com/FountainJS/generator-fountain-webapp',
      'http://gulpjs.com/',
      'https://babeljs.io/docs/plugins/preset-es2015/',
      'https://openweathermap.org/api'
    ];
    this.images = [];
    for (let i = this.fileNames.length - 1; i >= 0; i--) {
      this.images[i] = this.path + this.fileNames[i];
    }
  }
};

