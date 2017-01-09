/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp',['ionic','RongWebIMWidget','myApp.homePage','myApp.slideBox','myApp.homePageDetail','myApp.mall','myApp.store','myApp.my','myApp.order','myApp.collect','myApp.shoppingCar','myApp.integral','myApp.address','myApp.payment','myApp.recommend','myApp.httpFactory']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
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
/**
 * Created by lx on 2016/12/29.
 */
angular.module('myApp.homePageDetail',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('homePageDetail',{
        url:'/homePageDetail',
        templateUrl:'homePageDetail.html',
        controller:'homePageDetailController'
    });
}]).controller('homePageDetailController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection("back");
    }
}]);
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
        $scope.qwes = result.bannerData;
        // console.log($scope.cots);
    });
}]);
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.my',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.my',{
        url:'/my',
        views:{
            'tabs-my':{
                templateUrl:'my.html',
                controller:'myController'
            }
        }
    });
}]).controller('myController',['$scope','$state','$ionicViewSwitcher',function ($scope,$state,$ionicViewSwitcher) {
    //跳转我的订单页面
    $scope.goOrder = function () {
        $state.go('order');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转我的收藏页面
    $scope.goCollect = function () {
        $state.go('collect');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转我的购物车页面
    $scope.goShoppingCar = function () {
        $state.go('shoppingCar');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转我的积分页面
    $scope.goIntegral = function () {
        $state.go('integral');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转收货地址页面
    $scope.goAddress = function () {
        $state.go('address');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转支付记录页面
    $scope.goPayment = function () {
        $state.go('payment');
        $ionicViewSwitcher.nextDirection("forward");
    };
    //跳转推荐关注页面
    $scope.goRecommend = function () {
        $state.go('recommend');
        $ionicViewSwitcher.nextDirection("forward");
    };
}]);
/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.order',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('order',{
        url:'/order',
        templateUrl:'order.html',
        controller:'orderController'
    });
}]).controller('orderController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection("back");
    }
}]);
/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.payment',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('payment',{
        url:'/payment',
        templateUrl:'payment.html',
        controller:'paymentController'
    });
}]).controller('paymentController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }
}]);
/**
 * Created by lx on 2017/1/3.
 */
angular.module('myApp.recommend',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('recommend',{
        url:'/recommend',
        templateUrl:'recommend.html',
        controller:'recommendController'
    })
}]).controller('recommendController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }
}]);
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
        console.log($scope.contes);
    })
}]);
/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.httpFactory',[]).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,type) {
            if (url){
                var promise = $q.defer();
                // url = "http://192.168.0.100:3000/?myUrl=" + encodeURIComponent(url);
                // url = "http://localhost:3000/?myUrl=" + encodeURIComponent(url);
                // url = "http://59.110.139.104:3000/wy?myUrl=" + encodeURIComponent(url);
                type = type ? type:"GET";
                $http({
                    url:url,
                    method:type,
                    timeout:20000
                }).then(function (reslut) {
                    promise.resolve(reslut.data);
                },function (err) {
                    promise.reject(err);
                });
                return promise.promise;
            }
        }
    };
}]);
/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.slideBox',['ionic']).directive('mgSlideBox',[function () {
    return{
        restrict:"E",
        scope:{sourceArray:'='},
        templateUrl:'sildeBox.html',
        controller:['$scope','$element','$ionicSlideBoxDelegate',function ($scope,$element,$ionicSlideBoxDelegate) {
            $scope.goToDetailView = function (index) {
                console.log('进入详情页' + index);
            };
            // var lastSpan = $element[0].lastElementChild;

            $scope.$watch('sourceArray',function (newVal,oldVal) {
                if (newVal && newVal.length){
                    /*
                     * 两种方案解决轮播不能立刻显示或者显示错位的bug 改bug由于ng-repeat和slideBox的特性造成
                     * 完美的解决方案是使用添加ng-if 另一种是用update 和 loop
                     * */
                    $scope.isShowSlideBox = true;
                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').update();
                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').loop(true);
                    // lastSpan.innerText = $scope.sourceArray[0].title;
                }
            });
            // $scope.slideHasChanged = function (index) {
            //     lastSpan.innerText = $scope.sourceArray[index].title;
            // };
            //页面刚加载出来的时候禁止滑动
            $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
            //拖拽轮播图的时候也要禁止底层的slideBox滑动
            $scope.drag = function (event) {
                $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                //阻止事件冒泡
                event.stopPropagation();
            };

        }],
        replace:true,
        link:function (scope,tElement,tAtts) {
        }
    };
}]);