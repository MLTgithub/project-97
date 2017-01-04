/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.my',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.my',{
        url:'/my',
        views:{
            'tabs-my':{
                templateUrl:'my.html',
                controller:'myController'
            }
        }
    });
}]).controller('myController',['$scope','$state','$ionicViewSwitcher',function ($scope,$state,$ionicViewSwitcher) {
    //跳转我的订单页面
    $scope.goOrder = function () {
        $state.go('order');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转我的收藏页面
    $scope.goCollect = function () {
        $state.go('collect');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转我的购物车页面
    $scope.goShoppingCar = function () {
        $state.go('shoppingCar');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转我的积分页面
    $scope.goIntegral = function () {
        $state.go('integral');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转收货地址页面
    $scope.goAddress = function () {
        $state.go('address');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转支付记录页面
    $scope.goPayment = function () {
        $state.go('payment');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转推荐关注页面
    $scope.goRecommend = function () {
        $state.go('recommend');
        $ionicViewSwitcher.nextDirection("forward");
    };
}]);