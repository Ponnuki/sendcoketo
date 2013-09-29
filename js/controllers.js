'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.label = $routeParams.word;
    $scope.generate = function() {
      html2canvas(document.getElementById("image-wrapper"), {
          onrendered: function(canvas) {
            var img=document.createElement("img");
            img.setAttribute('src', canvas.toDataURL("image/png"));
            document.body.appendChild(img);

            document.getElementById("image-wrapper").innerHTML = "";
            document.getElementById("image-wrapper").appendChild(img);

            document.getElementById("form").innerHTML = "Done!";
          }
      });

      return false;
    }
  }])