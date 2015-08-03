app.controller('SinglePostController', ['$scope','$firebaseObject', '$stateParams', function($scope, $firebaseObject, $stateParams) {
  var ref = new Firebase('https://blistering-inferno-8011.firebaseio.com/' + $stateParams.id + '');
  $scope.post = $firebaseObject(ref);

  $scope.label = "Testing";

  $scope.mainPt = 0;
  $scope.proPt = 0;
  $scope.conPt = 0;

  $scope.plusOneStory = function() {
    $scope.mainPt += 1;
  };
  $scope.minusOneStory = function() {
    $scope.mainPt -= 1;
  };
  $scope.plusOnePro = function(index) {
    $scope.proPt += 1;
  };
  $scope.minusOnePro = function(index) {
    $scope.proPt -= 1;
  };
  $scope.plusOneCon = function(index) {
    $scope.conPt += 1;
  };
  $scope.minusOneCon = function(index) {
    $scope.conPt -= 1;
  };
}]);
