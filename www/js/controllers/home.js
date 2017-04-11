(function() {
'use strict';

angular
  .module('Porticos.controllers')
  .controller('homeCtrl', homeCtrl);

  function homeCtrl($scope, $cordovaBarcodeScanner) {
    console.log('home init');

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
  };

}).call(this);
