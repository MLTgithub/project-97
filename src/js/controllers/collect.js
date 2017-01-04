/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.collect',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('collect',{
        url:'/collect',
        templateUrl:'collect.html',
        controller:'collectController'
    })
}]).controller('collectController',['$scope','$ionicViewSwitcher','HttpFactory',function ($scope,$ionicViewSwitcher,HttpFactory) {
    // //返回上一层
    // $scope.goBack = function () {
    //     window.history.go(-1);
    //     $ionicViewSwitcher.nextDirection('back');
    // };

    //请求的内容
    var url = 'http://114.112.94.166/sunny/wap/api/ucollection';
    HttpFactory.getData(url).then(function (result) {
        $scope.shous = result.collectionData;
       console.log($scope.shous);
    });
}]);