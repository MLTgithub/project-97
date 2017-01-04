/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.shoppingCar',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('shoppingCar',{
        url:'/shoppingCar',
        templateUrl:'shoppingCar.html',
        controller:'shoppingCarController'
    })
}]).controller('shoppingCarController',['$scope','$ionicViewSwitcher','HttpFactory',function ($scope,$ionicViewSwitcher,HttpFactory) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection("back");
    };

    var url = 'http://114.112.94.166/sunny/wap/api/ushoppingCart';
    HttpFactory.getData(url).then(function (result) {
        console.log(result);
    });

}]);