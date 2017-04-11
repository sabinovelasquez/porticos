angular.module('Porticos.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // HOME
    .state('home', {
      url: '/home',
      templateUrl: 'components/home.html',
      controller:'homeCtrl'
    })
    ;
  $urlRouterProvider.otherwise('/home');
});
