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
    //返回上一层
    // $scope.goBack = function () {
    //     window.history.go(-1);
    //     $ionicViewSwitcher.nextDirection("back");
    // };

    var url = 'http://114.112.94.166/sunny/wap/api/ushoppingCart';
    HttpFactory.getData(url).then(function (result) {
        $scope.shops = result.shoppingCart;
        $scope.les = result.shoppingCart.length;
        console.log($scope.shops);
    });


    // var CH = document.getElementById('CH');
    // var inp = angular.element(document.querySelectorAll('#inp')[0]);
    // console.log(inp);
    // CH.onfocus = function (e) {
    //     console.log(e.target.value);
    //     if(e.target.value==='on'){
    //         inp.css("background","red");
    //     }
    // }


}]);