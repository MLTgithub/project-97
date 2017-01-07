/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.homePage',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.homePage',{
        url:'/homePage',
        views:{
            'tabs-homePage':{
                templateUrl:'homePage.html',
                controller:'homePageController'
            }
        }
    });
}]).controller('homePageController',['$scope','$ionicModal','RongCustomerService','$state','$ionicViewSwitcher','HttpFactory',function ($scope,$ionicModal,RongCustomerService,$state,$ionicViewSwitcher,HttpFactory) {
    //进入详情页
    $scope.goToNewsDetail = function () {
        $state.go('homePageDetail');
        $ionicViewSwitcher.nextDirection("forward");
    };


    var url = 'http://114.112.94.166/sunny/wap/api/getGoods';
    HttpFactory.getData(url).then(function (result) {
        $scope.cons = result.goodsData;
        $scope.qwes = result.bannerData;
        console.log($scope.qwes);

    });

    //融云服务
    var dWidth = document.body.offsetWidth;
    var dHeight = document.body.offsetHeight;
    RongCustomerService.init({
        appkey:"uwd1c0sxuwq11",
        token:"DhXkfc3TWRWwV4fa8yJRbmm2ouFyL/1f1iOErjtmt0GtWWZm31+2qS3OxvKsERjNtK1ecNtkM9rg9iqy/FSwdw==",
        customerServiceId:"KEFU148300177455004",
        position:RongCustomerService.Position.right,
        reminder:" ",
        // displayConversationList:false,
        style:{
            width:window.screen.width,
            height:window.screen.height-62,
            displayMinButton:false,
            positionFixed:true
        },
        onSuccess:function(){
            //初始化完成
            //设置客服按钮位置
            var kf = angular.element(document.getElementById('rong-widget-minbtn'));
            kf.css('bottom','80px');
            kf.css('right','20px');
            var rongSendBtn = angular.element(document.getElementById('rong-sendBtn'));
            rongSendBtn.css('backgroundColor','#E60012');
            kf.on('click',function () {
                // $rootScope.hideTabs = true;
                // $state.reload();
                // $scope.openModal();
                // $state.go('rykf');
                // console.log(indexRY);
                // indexRY.style.position = 'absolute';
                // indexRY.style.height = '800px';
                // indexRY.style.width = '300px';
                // indexRY.style.backgroundColor = 'red';
                // document.body.removeChild(mm);
                // rongConversation.removeClass('ng-hide');

            });

            var minBtn = angular.element(document.getElementById('header').childNodes[1].childNodes[1]);
            minBtn.on('click',function () {
                // $rootScope.hideTabs = false;
                // $state.reload();
            });
            // WebIMWidget.onClose = function() {
            //     // $rootScope.hideTabs = false;
            //     $state.reload();
            // };


        },
        onError:function(){
            //初始化错误
        }
    });


    //模态窗口
    $ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();

        //数量的增加与减少
        var num = document.querySelector('#num');
        console.log(num.innerText);
        $scope.reduce = function () {
            if (num.innerText >= 1){
                num.innerText--;
            }
        };
        $scope.add = function () {
            num.innerText++;
        }
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //轮播图
    $scope.myActiveSlide = 1;

}]);