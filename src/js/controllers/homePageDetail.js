/**
 * Created by lx on 2016/12/29.
 */
angular.module('myApp.homePageDetail',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('homePageDetail',{
        url:'/homePageDetail',
        templateUrl:'homePageDetail.html',
        controller:'homePageDetailController'
    });
}]).controller('homePageDetailController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection("back");
    }
}]);