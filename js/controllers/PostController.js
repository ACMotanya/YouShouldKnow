app.controller('PostController', ['$scope','$http', function($scope, $http) {
  $http.get('data/posts.json').success(function(data) {
    $scope.posts = data;
  });
  $scope.plusOne = function(index) {
    $scope.data[index].storyRating += 1;
  };
  $scope.minusOne = function(index) {
    $scope.data[index].storyRating -= 1;
  };
}]);
