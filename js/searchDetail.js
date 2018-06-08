		//参数对象
		// params:{
		// 	//哪一类商品，默认为空
		// 	goodsFamily,
		// 	//中文，英文等类型，默认为空
		// 	goodsType1,
		// 	//注册年限，默认为空
		// 	registDate,
		// 	//1-2字，3字等类型，默认为空
		// 	goodsType2,
		// 	//价格区间，默认为空
		// 	price,
		// 	//商品名称,默认为空
		// 	goodsName,
		// 	//适用项目,默认为空
		// 	syxm,
		// 	//类似群组，默认为空，
		// 	lxqz:[],
		// 	//一页显示多少个商品，默认16
		// 	pageSize:16
		// 	//哪一页，默认第一页
		// 	pageNumber:1
		// }
		var shbClassify=[
			{	
				id:1,
				type:'01类-化学原料'

			},
			{	
				id:2,
				type:'02类-涂料油漆'

			},
			{	
				id:3,
				type:'03类-日化用品'

			},
			{	
				id:4,
				type:'04类-燃料油脂'

			},
			{	
				id:5,
				type:'05类-医药品'

			},
			{	
				id:6,
				type:'06类五金金属'

			},
			{	
				id:7,
				type:'07类-机械设备'

			},
			{	
				id:8,
				type:'08类-手工器械'

			},
			{	
				id:9,
				type:'09类-科学仪器'

			},
			{	
				id:10,
				type:'10类-医药设备'

			},
			{	
				id:11,
				type:'11类-灯具空调'

			},
			{	
				id:12,
				type:'11类-灯具空调'

			},
			{	
				id:13,
				type:'13类-军火烟火'

			},
			{	
				id:14,
				type:'14类-珠宝钟表'

			},
			{	
				id:15,
				type:'15类-乐器'

			},
			{	
				id:16,
				type:'16类-办公用品'

			},
			{	
				id:17,
				type:'17类-橡胶制品'

			},
			{	
				id:18,
				type:'18类-皮革皮具'

			},
			{	
				id:19,
				type:'19类-建筑材料'

			},
			{	
				id:20,
				type:'20类-家具'

			},
			{	
				id:21,
				type:'21类-厨房洁具'

			},
			{	
				id:22,
				type:'22类-绳网袋篷'

			},
			{	
				id:23,
				type:'23类-纱线丝'

			},
			{	
				id:24,
				type:'24类-布料床单'

			},
			{	
				id:25,
				type:'25类-服装鞋帽'

			},
			{	
				id:26,
				type:'26类-纽扣拉链'

			},
			{	
				id:27,
				type:'27类-地毯席垫'

			},
			{	
				id:28,
				type:'28类-健身器材'

			},
			{	
				id:29,
				type:'29类-食品'

			},
			{	
				id:30,
				type:'30类-方便食品'

			},
			{	
				id:31,
				type:'31类-饲养种子'

			},
			{	
				id:32,
				type:'32类-啤酒饮料'

			},
			{	
				id:33,
				type:'33类-酒'

			},
			{	
				id:34,
				type:'34类-烟草烟具'

			},
			{	
				id:35,
				type:'35类-广告销售'

			},
			{	
				id:36,
				type:'36类-金融物管'

			},
			{	
				id:37,
				type:'37类-建筑修理'

			},
			{	
				id:38,
				type:'38类-通讯服务'

			},
			{	
				id:39,
				type:'39类-运输储藏'

			},
			{	
				id:40,
				type:'40类-材料加工'

			},
			{	
				id:41,
				type:'41类-教育娱乐'

			},
			{	
				id:42,
				type:'42类-网站服务'

			},
			{	
				id:43,
				type:'43类-餐饮住宿'

			},
			{	
				id:44,
				type:'44类-医疗园艺'

			},
			{	
				id:45,
				type:'45类-社会服务'

			},
		];
		var params={};
		//用来存放使用项目的数组列表
		var allSyxm=[];
		//用来存放类似群组的数组列表
		var allLsqz=[];
		$(document).ready(function(){
			//将商品的分类写到页面上
			var goodsFamilyHtml="";
			for(var i=0,len=shbClassify.length;i<len;i++){
				goodsFamilyHtml+=`<li ><a href="" class="goodsFamily"  data-id="${shbClassify[i].id}">${shbClassify[i].type}</a></li>`;
			}
			$('.goodsFamilyList').html(goodsFamilyHtml);
			//获取地址栏传参，请求数据
			var url=window.location.href;
			if(url.indexOf("?") !=-1){
				var str=url.split("?")[1];
				var arr=str.split("&");
				for(var i=0,len=arr.length;i<len;i++){
					var item=arr[i].split("=");
					params[item[0]]=item[1];
				}
				getData(params);
			}
			//更改分类，请求数据
			$('.goodsFamily').on('click',function(e){
				e.preventDefault();
				var type=$(this).data('id');
				if(type==0) type='';
				params.goodsFamily=type;
				console.log(params)
				$(this).parent().addClass('active').siblings().removeClass('active');
				getData(params);
			})
			//更改类型中文，英文等，请求数据
			$('.goodsType1').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				if(type=='不限') type='';
				params.goodsType1=type;
				console.log(params)
				$(this).parent().addClass('active').siblings().removeClass('active');
				getData(params);
			})
			//更改注册年限，请求数据
			$('.registDate').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				if(type=='不限') type='';
				params.registDate=type;
				console.log(params)
				$(this).parent().addClass('active').siblings().removeClass('active');
				getData(params);
			})
			//更改数字1-2字，等，请求数据
			$('.goodsType2').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				if(type=='不限') type='';
				params.goodsType2=type;
				console.log(params)
				$(this).parent().addClass('active').siblings().removeClass('active');
				getData(params);
			})
			//更改价格区间，请求数据
			$('.price').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				if(type=='不限') type='';
				params.price=type;
				console.log(params)
				$(this).parent().addClass('active').siblings().removeClass('active');
				getData(params);
			})
			//跟改使用项目，请求数据
			$('.syxm').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				params.syxm=type;
				console.log(params)
				$(this).parent().addClass('active').siblings().removeClass('active');
				getData(params);
			})
			//更改类似群组，请求数据
			$('.lsqz').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				if(!params.lsqz){
					params.lsqz=[];
				}
				params.lsqz.push(type);
				console.log(params)
				$(this).parent().addClass('active');
				getData(params);
			})
			$('.goodsName-btn').on('click',function(){
				params.goodsName=$('.goodsName-input input').val();
				getData(params);
			})
			//去商品详情页
			$('.shb-item').on('click',function (){
				var id=$(this).data("id");
				window.open("shbDetail.html?id="+id);
			})
			//删除某一个标签，更改商品列表
			$('.sf-close').on('click',function(e){
				var type=$(this).data('type')
				console.log(type)
				params[type]='';
				getData(params);
			})
			//全部删除标签，请求数据
			$('.close-all').on('click',function(e){
				params={};
				getData(params);
			})
			//鼠标移入移除的动画效果
			$('.shb-box').on('mouseenter',function(e){
				$(this).addClass('active')
			})
			$('.shb-box').on('mouseleave',function(e){
				$(this).removeClass('active')
			})
			//免费咨询按钮去客服页面
			$('.tokf').on('click',function(e){
				e.preventDefault();
				window.open("http://p.qiao.baidu.com/cps/chat?siteId=12023627&userId=25605932");
			})
			//展开跟多
			$('.showMore').on('click',function(e){
				e.preventDefault();
				console.log($('.sf-2 .top').hasClass('active'))
				if($('.sf-2 .top').hasClass('active')){
					$('.sf-2 .top').removeClass('active')
				}else{
					$('.sf-2 .top').addClass('active')
				}
			})
		})
		//获取商品列表的函数
		function getData(params){
			$.ajax({
				type:'GET',
				url:'http://',
				data:params,
				success:function(res){
					var shopHtml="";
					//商品列表数据
					var shopList=res.data;
					for(var i=0,len=shopList.length;i<len;i++){
						var p=shopList[i];
						shopHtml+=`<div  class="shb-item" data-id="${p.id}">
							<div class="shb-box">
								<img src="${p.src}" alt="">
								<p class="shb-title">${p.goodsFamily}&nbsp;<abbr title="${p.title}">${p.title}</abbr></p>
								<p class="shb-fw">${p.syfw}</p>
								<a href="" click="tokf">免费咨询</a>
							</div>
						</div>`
					}
					//更新商品列表
					$('.shb-list').html(shopHtml);
					var page="";
					//当前页
					var pageNumber=parseInt(res.pageNumber);
					//总页数
					var totalPage=parseInt(res.totalPage);
					if(pageNumber>1){
						page+=`<span >上一页</span>`;
					}
					if(pageNumber-2>0){
						page+=`<span>${pageNumber-2}</span>`;
					}
					if(pageNumber-1>0){
						page+=`<span>${pageNumber-1}</span>`;
					}
					page+=`<span  class="active" >${pageNumber}</span>`;
					if(pageNumber<totalPage){
						page+=`<span>${pageNumber+1}</span>`;
					}
					if(pageNumber+1<totalPage){
						page+=`<span>${pageNumber+2}</span>`;
					}
					if(pageNumber<totalPage){
						page+=`<span>下一页</span>`;
					}
					page+=`<i>共${totalPage}页</i>
						<i>跳转到</i>
						<input type="text">
						<a href="">确定</a>
					</div>`;
					//更新分页标签
					$('.page-box').html(page);
					//更新顶部标签
					var labelHtml='';
					if(params.goodsFamily){
						var goodsFamilyStr=cutString(params.goodsFamily,5);
						labelHtml+=`<span class="sort">${goodsFamilyStr}<span class="sf-close" data-type="goodsFamily" >×</span></span>`;
					}
					if(params.goodsType1){
						var goodsType1Str=cutString(params.goodsType1,5);
						labelHtml+=`<span class="sort">${goodsType1Str}<span class="sf-close"  data-type="goodsType1">×</span></span>`
					}
					if(params.registDate){
						var registDateStr=cutString(params.registDate,5);
						labelHtml+=`<span class="sort">${registDateStr}<span class="sf-close" data-type="registDate">×</span></span>`
					}
					if(params.goodsType2){
						var goodsType2Str=cutString(params.goodsType2,5);
						labelHtml+=`<span class="sort">${goodsType2Str}<span class="sf-close" data-type="goodsType2">×</span></span>`
					}
					if(params.price){
						labelHtml+=`<span class="sort">${params.price}<span class="sf-close" data-type="price">×</span></span>`
					}
					if(params.syxm){
						var syxmStr=cutString(params.syxm,5);
						labelHtml+=`<span class="sort">${syxmStr}<span class="sf-close" data-type="syxm">×</span></span>`
					}
					if(params.lsqz){
						var lsqz=params.lsqz.join(",");
						var lsqzStr=cutString(lsqz,5)
						labelHtml+=`<span class="sort">${lsqzStr}<span class="sf-close" data-type="lsqz">×</span></span>`
					}
					if(params.goodsName){
						var goodsNameStr=cutString(params.goodsName,5);
						labelHtml+=`<span class="sort">${goodsNameStr}<span class="sf-close" data-type="goodsName">×</span></span>`
					}
					$(".label").html(labelHtml);
					//判断是否有标签，如果有则显示全部删除标签，否则就隐藏全部删除标签
					if($(".label").html()==null || $(".label").html()==""){
						$('.close-all').css({'display':'none'})
					}else{
						$('.close-all').css({'display':'inline-block'})
					}
					//使用项目,类似群组的更新
					if(res.allSyxm){
						$(".sf-2 .bottom").css({'display':'block'})
						if(res.allSyxm!=allSyxm){
							var syxmHtml="";
							allSyxm=res.allSyxm;
							for(var i=0,len=res.allSyxm.length;i<len;i++){
								syxmHtml+=`<span class="active"><a href="" class="syxm">${allSyxm[i]}</a></span>`;
							}
							$('.all-syxm').html(syxmHtml);
							var lsqzHtml="";
							allLsqz=res.allLsqz;
							for(var i=0,len=res.allLsqz.length;i<len;i++){
								lsqzHtml+=`<span class="active"><a href="" class="syxm">${allLsqz[i]}</a></span>`;
							}
							$('.all-lsqz').html(lsqzHtml);
						}
					}else{
						$(".sf-2 .bottom").css({'display':'none'})
					}
				},
				error:function(res){
					console.log(res)
				}
			})
		}
		//截取字符串长度，多余的添加省略号
		function cutString(str, len) {  
		   //length属性读出来的汉字长度为1  
		   if(str.length*2 <= len) { 
		     return str; 
		   } 
		   var strlen = 0; 
		   var s = ""; 
		   for(var i = 0;i < str.length; i++) { 
		     s = s + str.charAt(i); 
		     if (str.charCodeAt(i) > 128) { 
		       strlen = strlen + 2; 
		       if(strlen >= len){ 
		         return s.substring(0,s.length-1) + "..."; 
		       } 
		     } else { 
		       strlen = strlen + 1; 
		       if(strlen >= len){ 
		         return s.substring(0,s.length-2) + "..."; 
		       } 
		     } 
		   }  
		   return s; 
		} 