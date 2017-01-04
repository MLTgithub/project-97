/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.order',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('order',{
        url:'/order',
        templateUrl:'order.html',
        controller:'orderController'
    });
}]).controller('orderController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection("back");
    }
}]);