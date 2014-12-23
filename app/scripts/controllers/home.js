'use strict';

/**
 * @ngdoc function
 * @name ieToolkitApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ieToolkitApp
 */
angular.module('ieToolkitApp')
  .controller('HomeCtrl', function ($scope, $route) {
  	$scope.activeTab = $route.current.activetab;
  	console.log($scope.activeTab);
  	console.log($route);
  });
