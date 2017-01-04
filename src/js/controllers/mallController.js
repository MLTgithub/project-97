/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.mall',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.mall',{
        url:'/mall',
        views:{
            'tabs-mall':{
                templateUrl:'mall.html',
                controller:'mallController'
            }
        }
    });
}]).controller('mallController',['$scope','HttpFactory',function ($scope,HttpFactory) {

    var url = 'http://114.112.94.166/sunny/wap/api/getGoods';
    HttpFactory.getData(url).then(function (result) {
        $scope.cots = result.goodsData;
        // console.log($scope.cots);
    });
}]);