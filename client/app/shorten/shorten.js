
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = '';
  $scope.addLink = function() {
    var newLink = {
      url: $scope.link
    };
    Links.addOne(newLink);
  };
});
