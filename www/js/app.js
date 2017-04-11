'use strict';

angular.module('Porticos', [
  'ionic',
  'ngCordova',
  'Porticos.routes',
  'Porticos.controllers'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

angular.module('Porticos.controllers', []);