'use strict';

/**
 * @ngdoc function
 * @name ieToolkitApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ieToolkitApp
 */
angular.module('ieToolkitApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
