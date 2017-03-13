import './credits.css';

export const credits = {
  template: require('./credits.html'),
  controller() {
    this.path = './app/images/';
    this.images = [
      'angular-logo.svg',
      'yeoman-logo.png',
      'fountain-logo.png',
      'gulp-logo.png',
      'babel-logo.png'
    ];
    for (let i = this.images.length - 1; i >= 0; i--) {
      this.images[i] = this.path + this.images[i];
    }
  }
};

