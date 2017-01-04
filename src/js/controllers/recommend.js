/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.recommend',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('recommend',{
        url:'/recommend',
        templateUrl:'recommend.html',
        controller:'recommendController'
    })
}]).controller('recommendController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }
}]);