$(function(){

	var url=window.location.href;
	var wy=url.split("\.html")[0].split("\/").pop();
	var n=0;
	switch(wy){
		case "index":
			n=0;
			break;
		case "shbMarket":
			n=1;
			break;
		case "searchDetail":
			n=1;
			break;
		case "shbDetail":
			n=1;
			break;
		case "shbRegister":
			n=2;
			break;
		case "tmShopstore":
			n=3;
			break;
		case "storeDetail":
			n=3;
			break;
		case "patent":
			n=4;
			break;
		case "news":
			n=5;
			break;
		case "newsDetail":
			n=5;
			break;
		case "about":
			n=6;
			break;
	}
	//页面头部的加载，并且动态修改当前选中项
	$.ajax({
		type:"get",
		url:"header.html",
		dataType:"html",
		async:false,
		success:function(data){
			$(".header").html(data);
			$(".nav>li").eq(n).addClass("active").siblings().removeClass("active");
		}
	});
	//页面尾部的加载
	$.ajax({
		type:"get",
		url:"footer.html",
		dataType:"html",
		async:false,
		success:function(data){
			$(".footer").html(data);
		}
	});
	//搜索按钮暂时跳到客服对话框
	$(".header .search-btn").on("click",function(e){
		e.preventDefault();
		$(".prompt").show();
		setTimeout(function(){
			$(".prompt").hide();
			window.open("http://p.qiao.baidu.com/cps/chat?siteId=12023627&userId=25605932");
		},1000)
        
	});
	//跳到天猫店铺页面的暂时去往客服对话框
	$(".tmdp-wait").on("click",function(e){
		e.preventDefault();
        $(".prompt").show();
		setTimeout(function(){
			$(".prompt").hide();
			 window.open("http://p.qiao.baidu.com/cps/chat?siteId=12023627&userId=25605932");
		},1000)
        
	});
	//鼠标悬停和离开时样式改变
	$(".left-function").on("mouseenter","a",function(e){
		e.preventDefault();
		var $tar=$(e.target);
		$tar.addClass("active");
	});
	$(".left-function").on("mouseout","a",function(e){
		e.preventDefault();
		var $tar=$(e.target);
		$tar.removeClass("active");
	});
	//返回顶部
	$(".left-function .fun-4").click(function() {
       $("html,body").animate({scrollTop:0}, 500);
  	}); 
  	//页面滚动到一定高度是，客服图标和左侧功能栏
  	$(document).ready(function(){
  		$(window).scroll(function(){
  			var top=$(document).scrollTop();
  			if(top>150){
  				$("ins#nb_icon_wrap.nb-icon-wrap.nb-icon-base.icon-right-center.nb-icon-skin-xc-1.nb-icon-icon").show(500);
  				$('.footer .left-function').show(500);
  			}else{
  				$("ins#nb_icon_wrap.nb-icon-wrap.nb-icon-base.icon-right-center.nb-icon-skin-xc-1.nb-icon-icon").hide(500);
  				$('.footer .left-function').hide(500);
  			}
  		})
  	})
})