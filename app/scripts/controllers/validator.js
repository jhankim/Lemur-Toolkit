'use strict';

/**
 * @ngdoc function
 * @name ieToolkitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ieToolkitApp
 */
angular.module('ieToolkitApp')
  .controller('ValidatorCtrl', function ($scope, $route) {
    $scope.activeTab = $route.current.activetab;
  });
