'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.word = $routeParams.word;

    $scope.generate = function() {
      html2canvas(document.getElementById("image-wrapper"), {
        onrendered: function(canvas) {
          var img=document.createElement("img");
          img.setAttribute('src', canvas.toDataURL("image/png"));
          document.body.appendChild(img);

          document.getElementById("image-wrapper").innerHTML = "";
          document.getElementById("image-wrapper").appendChild(img);

          document.getElementById("submit").innerHTML = '<div class="row"><button disabled class="btn btn-disabled col-xs-12 col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">Done!</button></div>';

          alert("Done! Now you can save the image");

          window.location.hash = "/?word=" + encodeURIComponent($scope.word);
          document.getElementById("input").value = window.location.href;
        }
      });
    }

  }])