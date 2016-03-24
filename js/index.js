/*
* @Author: lj
* @Date:   2016-02-01 13:40:11
* @Last Modified by:   lj
* @Last Modified time: 2016-02-11 12:50:41
*/

(function(){
    $(document).ready(function() {
          tabBar("gomeFirstFloor");
          tabBar("gomeSecondFloor");
          tabBar("gomeThirdFloor");
          tabBar("gomeFourthFloor");
          tabBar("gomeFivthFloor");
          tabBar("gomeSixthFloor");
          tabBar("gomeSeventhFloor");
          tabBar("gomeEighthFloor");
          tabBar("gomeNinthFloor");

          bigSlider("gomeSlider") ;
    });
    var sliderImageData = {
        images: [
            {imgSrc: "images/0129sj1.jpg",type: "今日惊喜"},
            {imgSrc: "images/0201sj1ds.jpg",type: "今日惊喜"},
            {imgSrc: "images/电视创维2.1.jpg",type: "服饰百货"},
            {imgSrc: "images/首焦2服饰1.28.jpg",type: "服饰百货"},
            {imgSrc: "images/首焦3子帧电脑0201.jpg",type: "手机3C"},
            {imgSrc: "images/首焦3手机子帧0129.jpg",type: "手机3C"},
            {imgSrc: "images/首焦2百货1.28.jpg",type: "彩电影音"},
            {imgSrc: "images/首焦4电视2.1.jpg",type: "彩电影音"},
            {imgSrc: "images/首焦5冰洗2.1.jpg",type: "冰洗空调"},
            {imgSrc: "images/首焦5空调2.1.jpg",type: "冰洗空调"},
            {imgSrc: "images/首焦6厨大2.1.jpg",type: "烟灶/小家电"},
            {imgSrc: "images/首焦6小家电1.29.jpg",type: "烟灶/小家电"},
            {imgSrc: "images/首焦7主帧华为品牌日0201xg1.jpg",type: "电器城"},
            {imgSrc: "images/首焦7子帧大家电0201xg1.jpg",type: "电器城"},
            {imgSrc: "images/首焦8家装2.1.jpg",type: "家装汽车"},
            {imgSrc: "images/首焦8汽车1.21.jpg",type: "家装汽车"},
            {imgSrc: "images/首焦9主帧海信0201.jpg",type: "品牌活动"},
            {imgSrc: "images/首焦9子帧油联0201.jpg",type: "品牌活动"},
        ]
    }
    function tabBar(id) {
        // 获取到所有的LI元素
        var $gomeFloor = $("#"+id);
        var $gomeFloorRightTitle = $gomeFloor.find(".gome-floor-right-title");
        var $gomeFloorRightTitleLis = $gomeFloorRightTitle.find("li");
        var $gomeFloorRightContents = $gomeFloor.find(".gome-floor-right-content");
        // 鼠标进入某一个li时，更改当前li元素的类名为current
        $gomeFloorRightTitleLis.on("mouseenter",function() {
            $gomeFloorRightTitleLis.removeClass("current");
            $(this).addClass("current");
            // 隐藏所有的内容
            $gomeFloorRightContents.css("display","none");
            // 获取到li里面的target属性
            var lisId = $(this).attr("target");
            // console.log(lisId);
            $gomeFloor.find("#"+lisId).css("display","block");
        });
        // 调用轮播图
        slider(id+" .gomeFloorSlide");
    }
    function slider(id) {
          //  获取元素
          var $slider = $("#" + id);
          var $lis = $slider.find("li");
          var $previes = $slider.find(".gome-floor-right-slider-previes");
          var $next = $slider.find(".gome-floor-right-slider-next");
          var index = 0;
          var len = $lis.length;
          $lis.eq(0).css("z-index",3);
           // 添加点击事件
           $next.on("click",function() {
                $lis.eq(index).css("z-index",3)
               $lis.eq(index).animate({
                  opacity: 0
                },1000,function(){
                  $lis.eq(index).css("z-index",1);
                });
                if(index == len-1) {
                    $lis.eq(0).css("z-index",2);
                    $lis.eq(0).animate({
                      opacity: 1
                    },1000,function() {
                      $lis.eq(0).css("z-index",3);
                    });
                }
                else {
                    $lis.eq(index+1).css("z-index",2);
                    $lis.eq(index+1).animate({
                      opacity: 1
                    },1000,function() {
                      $lis.eq(index+1).css("z-index",2);
                    });
                }
                index ++ ;
                index = index >= 3 ? 0 : index;
           });
           $previes.on("click",function() {
                $lis.eq(index).css("z-index",3)
               $lis.eq(index).animate({
                  opacity: 0
                },1000,function(){
                  $lis.eq(index).css("z-index",1);
                });
                if(index <= 0) {
                    $lis.eq(len-1).css("z-index",2);
                    $lis.eq(len-1).animate({
                      opacity: 1
                    },1000,function() {
                      $lis.eq(len-1).css("z-index",3);
                    });
                }
                else {
                    $lis.eq(index-1).css("z-index",2);
                    $lis.eq(index-1).animate({
                      opacity: 1
                    },1000,function() {
                      $lis.eq(index-1).css("z-index",2);
                    });
                }
                index--;
                index = index < 0 ? 2 : index;
           })
    }
    function bigSlider(id) {
      //获取元素
      var $bigSlider = $("#" + id);
      var $sliderUl = $bigSlider.find("ul");
      var $sliderOl = $bigSlider.find("ol");
      var $previes = $bigSlider.find(".gome-slider-ctrls-previes");
      var $next = $bigSlider.find(".gome-slider-ctrls-next");
      var  ulStr = '';
      var  olStr = '';
      var iNow = 0;
      var iNowOl = 0;
      var timer = null;
      // 根据定义的数据，把图片添加到页面
      for(var i=0,len=sliderImageData.images.length; i < len ; i++) {
            ulStr += '<li><a href="#"><img src="' + sliderImageData.images[i].imgSrc + '"></a></li>';
            if(i % 2 == 0) {
                olStr += '<li data-index = '+ (i/2) +'>';
                olStr += '<font>'+ sliderImageData.images[i].type +'</font>';
                olStr += '<i data-index = '+ i +'><span></span></i>';
                olStr += '<i data-index = '+ (i+1) +'><span></span></i>';
                olStr += '</li>';
            }
      }

      $sliderUl.html(ulStr);
      $sliderOl.html(olStr);
      var $ulLis = $sliderUl.find("li");
      var count = $ulLis.length - 1;
      $ulLis.eq(0).css("z-index",3);
      var $olIs = $sliderOl.find("li i");
      var $olLis = $sliderOl.find("li");
      var $olSpan = $sliderOl.find("span");
      $ulLis.first().addClass("current");
      $sliderOl.find("li").first().addClass("gome-slider-current");
      $olIs.addClass("gome-slider-current-i");
      $sliderOl.find("li span").first().addClass("gome-slider-current-span");

      // 设置鼠标进入下方span事件
      $sliderOl.find("li").on("mouseenter",function() {
          $sliderOl.find("li").removeClass("gome-slider-current");
          $(this).addClass("gome-slider-current");
          $(this).find("i").removeClass("gome-slider-current-i");
          $(this).find("i").addClass("gome-slider-current-i");
          iNowOl = $(this).attr("data-index")
      });
      $sliderOl.find("li i").on("mouseenter",function() {
          $sliderOl.find("li i span").removeClass("gome-slider-current-span");
          $(this).find("span").addClass("gome-slider-current-span");

          // console.log(iNow);
          $ulLis.eq(iNow).css("z-index" , 3);
            $ulLis.eq(iNow).animate({
                opacity:0
            },500,function() {
                $ulLis.eq(iNow).css("z-index" , 1);
            });
            iNow = $(this).attr("data-index");
            $ulLis.eq(iNow).css("z-index" , 2);
            $ulLis.eq(iNow).animate({
                opacity:1
            },500,function() {
                $ulLis.eq(iNow).css("z-index" , 3);
            });
      });


      $previes.on("click",function() {
            console.log($ulLis);
            $ulLis.eq(iNow).css("z-index" , 3);
            $ulLis.eq(iNow).animate({
                opacity:0
            },500,function() {
                $ulLis.eq(iNow).css("z-index" , 1);
            });
            iNow -- ;
            iNow = iNow < 0 ? count : iNow;
            console.log(iNow);
            $ulLis.eq(iNow).css("z-index" , 2);
            $ulLis.eq(iNow).animate({
                opacity:1
            },500,function() {
                $ulLis.eq(iNow).css("z-index" , 3);
            });
            if(iNow % 2 == 1) {
                iNowOl -- ;
                iNowOl = iNowOl < 0 ? $olLis.length - 1 : iNowOl ;
                $olLis.removeClass("gome-slider-current");
                $olLis.eq(iNowOl).addClass("gome-slider-current");
                $olIs.removeClass("gome-slider-current-i");
                $olLis.eq(iNowOl).find("i").addClass("gome-slider-current-i");
            };
            $olSpan.removeClass("gome-slider-current-span");
            $olSpan.eq(iNow).addClass("gome-slider-current-span");
      });
      $next.on("click",function() {
            nextClick();
      });
      clearInterval(timer);
      timer = setInterval(function() {
          nextClick();
      },3000);
      $sliderUl.on("mouseenter",function() {
          clearInterval(timer);
      }).on("mouseout",function() {
          clearInterval(timer);
           timer = setInterval(function() {
                nextClick();
            },3000);
      });
      $sliderOl.on("mouseenter",function() {
            clearInterval(timer);
      }).on("mouseout",function() {
            clearInterval(timer);
            timer = setInterval(function() {
                nextClick();
            },3000);
      });
      $previes.on("mouseenter",function() {
            clearInterval(timer);
      }).on("mouseout",function() {
            clearInterval(timer);
            timer = setInterval(function() {
                nextClick();
            },3000);
      });
      $next.on("mouseenter",function() {
            clearInterval(timer);
      }).on("mouseout",function() {
            clearInterval(timer);
            timer = setInterval(function() {
                nextClick();
            },3000);
      });
      function nextClick() {
          $ulLis.eq(iNow).css("z-index" , 3);
            $ulLis.eq(iNow).animate({
                opacity:0
            },500,function() {
                $ulLis.eq(iNow).css("z-index" , 1);
            });
            iNow ++ ;
            iNow = iNow > count ? 0 : iNow;
            console.log(iNow);
            $ulLis.eq(iNow).css("z-index" , 2);
            $ulLis.eq(iNow).animate({
                opacity:1
            },500,function() {
                $ulLis.eq(iNow).css("z-index" , 3);
            });
            if(iNow % 2 == 0) {
                iNowOl ++ ;
                iNowOl = iNowOl > $olLis.length - 1 ? 0 : iNowOl ;
                $olLis.removeClass("gome-slider-current");
                $olLis.eq(iNowOl).addClass("gome-slider-current");
                $olIs.removeClass("gome-slider-current-i");
                $olLis.eq(iNowOl).find("i").addClass("gome-slider-current-i");
            };
            $olSpan.removeClass("gome-slider-current-span");
            $olSpan.eq(iNow).addClass("gome-slider-current-span");
      }
    }

})()