var app = angular.module("WhyThisCounts", ['ui.router', 'firebase']);

app.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/post.html',
    controller: 'FirebaseController'
  });
  $stateProvider
    .state('post', {
      url: '/post/{id}',
      templateUrl: 'views/singlepost.html',
      controller: 'SinglePostController'
    });
  $urlRouterProvider.otherwise('home');
}]);
