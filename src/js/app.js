/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp',['ionic','RongWebIMWidget','myApp.homePage','myApp.homePageDetail','myApp.mall','myApp.store','myApp.my','myApp.order','myApp.collect','myApp.shoppingCar','myApp.integral','myApp.address','myApp.payment','myApp.recommend','myApp.httpFactory']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //适配安卓
    $ionicConfigProvider.views.transition('ios');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.tabs.style('standard');


    //跳转路由页面
    $stateProvider.state('tabs',{
        url:'/tabs',
        abstract:true,
        templateUrl:'tabs.html',
        controller:'tabsController'
    });
    $urlRouterProvider.otherwise('/tabs/homePage');
}]).controller('tabsController',['$scope',function ($scope) {

    //监听聊天客服是否隐藏
    $scope.$on('$stateChangeSuccess',function (evt,current,previous) {
        var update_wx_title = function(title) {
            var body = document.getElementsByTagName('body')[0];
            document.title = title;
            var iframe = document.createElement("iframe");
            // iframe.setAttribute("src", "../empty.png");
            iframe.addEventListener('load', function() {
                setTimeout(function() {
                    // iframe.removeEventListener('load');
                    document.body.removeChild(iframe);
                });
            });
            document.body.appendChild(iframe);
        };

        var BTN = angular.element(document.querySelector('#rong-widget-minbtn'));
        //判断路由状态
        switch (current.url){
            case'/homePage':
                BTN.css('display','block');
                break;
            case'/mall':
                BTN.css('display','block');
                break;
            case'/store':
                BTN.css('display','none');
                break;
            case'/my':
                BTN.css('display','none');
                break;
            case'/homePageDetail':
                BTN.css('display','none');
                break;
        }
    });
}]);