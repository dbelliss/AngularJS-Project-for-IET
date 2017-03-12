export default materialConfig;

/** @ngInject */
function materialConfig($mdThemingProvider) {
  $mdThemingProvider.theme('customTheme')
      .primaryPalette('grey')
      .accentPalette('orange')
      .warnPalette('red');
}
