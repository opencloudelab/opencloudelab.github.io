var myApp = angular.module('myApp', ['ngRoute', 'ngCookies'], function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});