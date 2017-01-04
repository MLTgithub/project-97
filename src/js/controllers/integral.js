/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.integral',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('integral',{
        url:'/integral',
        templateUrl:'integral.html',
        controller:'integralController'
    });
}]).controller('integralController',['$scope','$ionicViewSwitcher','HttpFactory',function ($scope,$ionicViewSwitcher,HttpFactory) {
    //返回上一层
    // $scope.goBack = function () {
    //     window.history.go(-1);
    //     $ionicViewSwitcher.nextDirection('back');
    // };

    var url = 'http://114.112.94.166/sunny/wap/api/uintegral';
    HttpFactory.getData(url).then(function (result) {
        $scope.ints = result.integralData
        console.log($scope.ints);
    });
}]);