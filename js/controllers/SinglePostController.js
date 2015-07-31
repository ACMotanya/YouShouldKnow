app.controller('SinglePostController', ['$scope','$http', '$stateParams', function($scope, $http, $stateParams) {
  $http.get('data/posts.json').success(function(data) {
    $scope.post = data[$stateParams.id];
  });
  $scope.plusOneStory = function(index) {
    $scope.post.storyRating += 1;
  };
  $scope.minusOneStory = function(index) {
    $scope.post.storyRating -= 1;
  };
  $scope.plusOnePro = function(index) {
    $scope.post.proRating += 1;
  };
  $scope.minusOnePro = function(index) {
    $scope.post.proRating -= 1;
  };
  $scope.plusOneCon = function(index) {
    $scope.post.conRating += 1;
  };
  $scope.minusOneCon = function(index) {
    $scope.post.conRating -= 1;
  };
}]);
