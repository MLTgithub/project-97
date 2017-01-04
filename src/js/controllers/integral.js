/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.integral',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('integral',{
        url:'/integral',
        templateUrl:'integral.html',
        controller:'integralController'
    });
}]).controller('integralController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }
}]);