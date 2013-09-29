'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('Main', ['$scope', function($scope) {
    $scope.generate = function() {
      console.log('generating');
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