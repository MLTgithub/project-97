/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.address',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('address',{
        url:'/address',
        templateUrl:'address.html',
        controller:'addressController'
    });
}]).controller('addressController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }
}]);