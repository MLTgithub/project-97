/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.payment',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('payment',{
        url:'/payment',
        templateUrl:'payment.html',
        controller:'paymentController'
    });
}]).controller('paymentController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }
}]);