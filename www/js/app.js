var porticos = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    $rootScope.options = {
      correctOrientation: false,
      cameraDirection : 1 // 0 means BACK, 1 means FRONT
   };  
  });
})

porticos.controller('scanBarCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan(
      {
        preferFrontCamera : true,
        orientation : 'portrait'
      }).then(function (result) {
        alert(result.text);
      },
      function (error) {
        alert('Scanning failed: ' + error);
      });
  };
});