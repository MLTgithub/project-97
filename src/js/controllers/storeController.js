/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.store',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.store',{
        url:'/store',
        views:{
            'tabs-store':{
                templateUrl:'store.html',
                controller:'storeController'
            }
        }
    });
}]).controller('storeController',['$scope','HttpFactory',function ($scope,HttpFactory) {

    var url = 'http://114.112.94.166/sunny/wap/api/franchise';
    HttpFactory.getData(url).then(function (result) {
        $scope.contes = result.data;
        // console.log($scope.contes);
    })
}]);