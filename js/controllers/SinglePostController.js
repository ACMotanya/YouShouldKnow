app.controller('SinglePostController', ['$scope','$http', '$stateParams', function($scope, $http, $stateParams) {
  $http.get('data/posts.json').success(function(data) {
    $scope.post = data[$stateParams.id];
  });
}]);
