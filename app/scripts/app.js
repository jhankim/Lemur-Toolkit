'use strict';

/**
 * @ngdoc overview
 * @name ieToolkitApp
 * @description
 * # ieToolkitApp
 *
 * Main module of the application.
 */
angular
  .module('ieToolkitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        activetab: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
