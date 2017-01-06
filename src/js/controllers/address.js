/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.address',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('address',{
        url:'/address',
        templateUrl:'address.html',
        controller:'addressController'
    });
}]).controller('addressController',['$scope','$ionicViewSwitcher','$ionicPopup','HttpFactory',function ($scope,$ionicViewSwitcher,$ionicPopup,HttpFactory) {
    //返回上一层
    // $scope.goBack = function () {
    //     window.history.go(-1);
    //     $ionicViewSwitcher.nextDirection('back');
    // };


    var url = 'http://114.112.94.166/sunny/wap/api/uAddress';
    HttpFactory.getData(url).then(function (result) {
        $scope.addrs = result.addressData;
        console.log($scope.addrs);
    });



    $scope.showConfirm = function(e) {
        var confirmPopup = $ionicPopup.confirm({
            title: '确定要删除该地址吗？',
            buttons: [
                { text: '取消' },
                { text: '确定'}
                ]
        });

        confirmPopup.then(function(res) {
            console.log(e.target.innerHTML);
            // if(res) {
            //     console.log('You are sure');
            // } else {
            //     console.log('You are not sure');
            // }
        });
    };


}]);