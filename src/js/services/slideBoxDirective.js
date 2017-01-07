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