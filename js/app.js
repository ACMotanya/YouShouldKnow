var app = angular.module("WhyThisCounts", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/post.html',
      controller: 'PostController'
    });
  $urlRouterProvider.otherwise('home');
}]);
