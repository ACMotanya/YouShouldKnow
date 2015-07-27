var app = angular.module('MyApp', []);

  app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
  });


  app.controller('DemoController', function() {
      this.label = "This binding is brought you by // interpolation symbols.";
  });
