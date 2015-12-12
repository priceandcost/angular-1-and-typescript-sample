/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', ($routeProvider: angular.route.IRouteProvider) => {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [() => {

}]); 