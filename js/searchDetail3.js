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
		// 	//一页显示多少个商品，默认20
		// 	pageSize:20
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
		//使用项目
		var shbXiangmu=[
			['肥料','胶水'],
			['染料','颜料','油墨','油漆、涂料'],
			['洗液、浴液','清洁制剂，牙膏','精油、香料','化妆品、面膜、香水'],
			['润滑','油柴油、汽油','煤','蜡','能源'],
			['人用药','婴儿食品、医用营养品净化剂','蚊香、农药、杀虫剂','婴儿尿裤、卫生巾'],
			['五金器具','保险柜','钉及紧固件','家具、门窗金属附件','钥匙、锁具','金属标牌'],
			['厨房用电动机器','洗衣机','手电钻','吸尘器','缝纫机'],
			['农业用具','理发护理用具','生活刀具','武器刀具','餐饮刀、叉'],
			['电脑周边及软硬件','记录、记数检测器','办公机器','手机周边及定位导航','音响器材','摄像器材','开关插座','眼镜及器材','电池及移动电源'],
			['医疗器械','奶瓶奶嘴','成人用品'],
			['灯具','厨房烤煮器','风扇、空调、净化器','水暖管件','卫生间用具及器具','净化消毒设备','取暖用具','冰箱冷柜'],
			['汽车及摩托配件','电动车、自行车及配件','儿童推车及轮椅','车内装饰品及儿童安全座椅','轮胎'],
			['烟花爆竹'],
			['贵金属及合金','首饰盒','珠宝、玉器、翡翠及穿戴的金属饰品','钟表'],
			['音乐乐器','乐器配件'],
			['办公用纸','生活用纸','书写纸及纸质印刷品','印刷出版物','包装纸及保鲜膜','办公文具','念珠教学用具'],
			['密封制品','软管','保温、隔热、隔音材料','绝缘材料'],
			['皮具箱包','登山杖','动物用具','皮带','伞','缺类'],
			['土、沙、石等建筑材料','建筑砖瓦','非金属建筑材料及构件','建筑玻璃'],
			['家具','家具附件','垫、枕'],
			['锅碗瓢盆等厨房用具','厨房玻璃器皿','厨房陶瓷器皿','茶、酒、咖啡器具','家庭日用及卫生器具','化妆用具','家务用具'],
			['缆、绳','帐篷、网'],
			['纺织用纱、丝'],
			['纺织品、布料','毛巾、浴巾','床上用品','室内遮盖物'],
			['女装','女鞋','男装','男鞋','童装','童鞋','缺类'],
			['花边','发夹、胸针'],
			['地毯','席','墙纸'],
			['玩具','健身器材','运动防护器具','钓具'],
			['肉类制品','非活水产品','干制水果','奶及奶制品','食用油','加工过的坚果','罐头食品','腌制食品'],
			['米、面粉','方便食品','调味品','面包、糕点','蜂蜜','糖果','茶','咖啡饮料'],
			['树木','花卉','生海鲜、活动物','动物饲料','新鲜水果','新鲜蔬菜','谷物'],
			['啤酒','水及饮料'],
			['酒'],
			['烟具','烟草'],
			['广告','连锁加盟','电子商务','财会、会计'],
			['保险','珍品估价','不动产事务','担保','典当'],
			['建筑咨询','工程服务','房子装修服务','电器安装及修理','汽车维修、汽车保养','衣服修补及清洗'],
			['电视播放','通讯服务'],
			['运输、搬迁','车辆出租及服务','仓储服务','快递服务','旅行服务'],
			['服装定制','空气净化服务'],
			['教育','组织安排活动','文娱、体育活动服务'],
			['服装设计','计算机编程及服务'],
			['餐饮、酒店、宾馆','提供房屋设施的服务','宠物寄养服务'],
			['医疗服务','美容服务','园艺'],
			['家政保姆','法律及知识产权服务']	
		];
		//类似群组
		var shbLxqz=[
			['0101','0102','0103','0104','0105','0106','0107','0108','0109','0110','0111','0112','0113','0114','0115','0116'],
			['0201','0202','0203','0204','0205','0206','0207'],
			['0301','0302','0303','0304','0305','0306','0307','0308','0309','0310'],
			['0401','0402','0403','0404','0405','0406','0407'],
			['0501','0502','0503','0504','0505','0506','0507','0508'],
			['0601','0602','0603','0604','0605','0606','0607','0608','0609','0610','0611','0612','0613','0614','0615','0616','0617','0618','0619','0620','0621','0622','0623','0624'],
			['0701','0702','0703','0704','0705','0706','0707','0708','0709','0710','0711','0712','0713','0714','0715','0716','0717','0718','0719','0720','0721','0722','0723','0724','0725','0726','0727','0728','0729','0730','0731','0732','0733','0734','0735','0736','0737','0738','0739','0740','0741','0742','0743','0744','0745','0746','0747','0748','0749','0750','0751','0752','0753','0754'],
			['0801','0802','0803','0804','0805','0806','0807','0808','0809','0810','0811','0812'],
			['0901','0902','0903','0904','0905','0906','0907','0908','0909','0910','0911','0912','0913','0914','0915','0916','0918','0919','0920','0921','0922','0923','0924'],
			['1001','1002','1003','1004','1005','1006','1007','1008','1009'],
			['1101','1103','1104','1105','1106','1107','1108','1109','1110','1111','1112','1113'],
			['1201','1202','1203','1204','1205','1206','1207','1208','1209','1210','1211'],
			['1301','1302','1303','1304'],
			['1401','1402','1403','1404'],
			['1501','1502'],
			['1601','1602','1603','1604','1605','1606','1607','1608','1609','1610','1611','1612','1613','1614','1615','1616','1617','1618','1619','1620','1621'],
			['1701','1702','1703','1704','1705','1706','1707','1708'],
			['1801','1802','1803','1804','1805','1806','1807'],
			['1901','1902','1903','1904','1905','1906','1907','1908','1909','1910','1911','1912','1913','1914','1915'],
			['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],
			['2101','2102','2103','2104','2105','2106','2107','2108','2109','2110','2111','2112','2113','2114','2115'],
			['2201','2202','2203','2204','2205'],
			['2301','2302','2303'],
			['2401','2402','2403','2404','2405','2406','2407','2408','2409','2410','2411'],
			['2501','2502','2503','2504','2505','2506','2507','2508','2509','2510','2511','2512','2513'],
			['2601','2602','2603','2604','2605','2606','2607','2608','2609','2610'],
			['2701','2702','2703','2704'],
			['2801','2802','2803','2804','2805','2806','2807','2808','2809','2810','2811','2812'],
			['2901','2902','2903','2904','2905','2906','2907','2908','2909','2910','2911','2912','2913'],
			['3001','3002','3003','3004','3005','3006','3007','3008','3009','3010','3011','3012','3013','3014','3015','3016','3017','3018','3019'],
			['3101','3102','3103','3104','3105','3106','3107','3108','3109','3110'],
			['3201','3202','3203'],
			['3301'],
			['3401','3402','3403','3404','3405','3406'],
			['3501','3502','3503','3504','3505','3506','3507','3508','3509'],
			['3601','3602','3603','3604','3605','3606','3607','3608','3609'],
			['3701','3702','3703','3704','3705','3706','3707','3708','3709','3710','3711','3712','3713','3714','3715','3716','3717','3718'],
			['3801','3802'],
			['3901','3902','3903','3904','3905','3906','3907','3908','3909','3910','3911','3912'],
			['4001','4002','4003','4004','4005','4006','4007','4008','4009','4010','4011','4012','4013','4014','4015'],
			['4101','4102','4103','4104','4105','4106','4107'],
			['4209','4210','4211','4212','4213','4214','4216','4217','4218','4220','4224','4227'],
			['4301','4302','4303','4304','4305','4306'],
			['4401','4402','4403','4404','4405'],
			['4501','4502','4503','4504','4505','4506']	
		];
		var params={};
		var paramsname={};
		//初始化总页数
		var totalPage;
		$(document).ready(function(){
			//alert('bbbbb');
			//将商品的分类写到页面上
			var goodsFamilyHtml="";
			for(var i=0,len=shbClassify.length;i<len;i++){
				goodsFamilyHtml+='<li ><a href="" class="goodsFamily"  data-id=\"'+shbClassify[i].id+'\">'+shbClassify[i].type+'</a></li>';
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
					if(item[0]=='cateCode'){
						if(Number(item[1])>0){
							paramsname.cateCodeName=shbClassify[Number(item[1])-1].type;
						}
					}
				}
				params.pageNumber=1;
				params.pageSize=20;
				getData(params);
			}
			//更改分类，请求数据
			$('.goodsFamily').on('click',function(e){
				e.preventDefault();
				var type=$(this).data('id');
				if(type==0){
					$(".sf-2 .bottom").css({'display':'none'});
					$(this).parent().addClass('active');
					$(this).parent().siblings("ul").children("li").removeClass('active');
					params.syxm=null;
					params.lsqz=null;
				}else{
					$(".sf-2 .bottom").css({'display':'block'})
					$(this).parent().addClass('active').siblings().removeClass('active');
					$(this).parent().parent().siblings("span").removeClass('active');
					var syxmHtml='';
					for(var i=0,l1=shbXiangmu[type-1].length;i<l1;i++){
						var item=shbXiangmu[type-1][i];
						syxmHtml+='<span><a href="" class="syxm">'+item+'</a></span>';
					}
					$('.all-syxm').html(syxmHtml);
					var lsqzHtml='';
					for(var i=0,l2=shbLxqz[type-1].length;i<l2;i++){
						var item=shbLxqz[type-1][i];
						lsqzHtml+='<span><a href="" class="lsqz">'+item+'</a></span>'
					}
					$('.all-lsqz').html(lsqzHtml);
				}				
				//params.goodsFamily=type;
				//alert($(this).html());
				paramsname.cateCodeName=$(this).html();
				//alert(paramsname.cateCodeName);
				var cateCode="";				
				if(type*1<10)
				{
					cateCode="0"+type;
				}else{cateCode=type;}
			    console.log(cateCode);
				params.cateCode=cateCode;
				params.pageNumber=1;
				params.pageSize=20;
				console.log(params);
				getData(params);
			})
			//更改类型中文，英文等，请求数据
			$('.goodsType1').on('click',function(e){
				e.preventDefault();				
				var type=$(this).html();
				//alert(type);
				console.log(type);
				var typerf=$(this).attr('ref');				
				console.log(typerf);
				//if(type=='不限') type='';
				//params.goodsType1=type;
				params.qmarktype=typerf;
				params.pageNumber=1;
				params.pageSize=20;
				$(this).parent().addClass('active').siblings().removeClass('active');
				console.log(params);
				getData(params);
			})
			//更改注册年限，请求数据
			$('.registDate').on('click',function(e){
				e.preventDefault();
				var type=$(this).html();
				//if(type=='不限') type='';
				var typerf=$(this).attr('ref');				
				console.log(typerf);
				//params.registDate=type;
				params.qregdate=typerf;
				params.pageNumber=1;
				params.pageSize=20;
				$(this).parent().addClass('active').siblings().removeClass('active');
				console.log(params);
				getData(params);
			})
			//更改数字1-2字，等，请求数据
			$('.goodsType2').on('click',function(e){
				e.preventDefault();
				//var type=$(this).html();
				//if(type=='不限') type='';
				//params.goodsType2=type;
				var typerf=$(this).attr('ref');				
				params.qworknum=typerf
				$(this).parent().addClass('active').siblings().removeClass('active');
				console.log(params);
				params.pageNumber=1;
				params.pageSize=20;
				getData(params);
			})
			//更改价格区间，请求数据
			$('.price').on('click',function(e){
				e.preventDefault();
				//var type=$(this).html();
				//if(type=='不限') type='';
				//params.price=type;
				var typerf=$(this).attr('ref');				
				params.qprice=typerf
				$(this).parent().addClass('active').siblings().removeClass('active');
				console.log(params);
				params.pageNumber=1;
				params.pageSize=20;
				getData(params);
			})
			//输入商品名称获取数据
			$('.goodsName-btn').on('click',function(){
				params.markName=$('.goodsName-input input').val();
				params.pageNumber=1;
				params.pageSize=20;
				console.log(params);
				getData(params);
			})
			//跟改使用项目，请求数据
			$('.all-syxm').on('click','.syxm',function(e){
				e.preventDefault();
				var type=$(this).html();
				params.syxm=type;
				params.pageNumber=1;
				params.pageSize=20;
				$(this).parent().addClass('active').siblings().removeClass('active');
				console.log(params);
				getData(params);
			})
			//更改类似群组，请求数据
			$('.all-lsqz').on('click','.lsqz',function(e){
				e.preventDefault();
				var type=$(this).html();
				if(!params.lsqz){
					params.lsqz=[];
				}
				params.lsqz.push(type);
				params.pageNumber=1;
				params.pageSize=20;
				$(this).parent().addClass('active');
				console.log(params);
				getData(params);
			})
			//点击分页获取数据
			$('.page-box').on('click','.changePage',function(e){
				var t=$(e.target).html();
				var pageNumber=params.pageNumber || 1;
				if(t==pageNumber){
					return
				}else if(t=='上一页'){
					pageNumber=pageNumber-1;
				}else if(t=='下一页'){
					pageNumber=pageNumber+1
				}else{
					pageNumber=t;
				}
				params.pageNumber=pageNumber;
				params.pageSize=20;
				console.log(params);
				getData(params);
				window.scrollTo(0,0);
			})
			//输入分页查询
			$('.page-box').on('click','.pageBtn',function(e){
				e.preventDefault();
				var page=$(this).siblings('.pageInput').val();
				if(!(/^\d+$/.test(page))) return;
				if(page>totalPage){
					alert('总共'+totalPage+'页，请重新输入');
					return;
				}
				params.pageNumber=page;
				params.pageSize=20;
				console.log(params);
				getData(params);
			})
			//去商品详情页
			$('.shb-list').on('click','.shb-item',function (){
				var id=$(this).data("id");
				window.open("x.jhtml?id="+id);
			})
			//删除某一个标签，更改商品列表
			$('.sf-1').on('click','.sf-close',function(e){
				var type=$(this).data('type')
				console.log(type)
				params[type]=0;
				params.pageNumber=1;
				params.pageSize=20;
				if(type=="qmarktype"){
					params[type]=-1;
					$(".sf-3>div>span:first-child").addClass('active').siblings().removeClass('active');
				}
				if(type=="qregdate"){
					$(".sf-4>div>span:first-child").addClass('active').siblings().removeClass('active');
				}
				if(type=="qworknum"){
					$(".sf-5>div>span:first-child").addClass('active').siblings().removeClass('active');
				}
				if(type=="qprice"){
					$(".sf-6>div>span:first-child").addClass('active').siblings().removeClass('active');
				}
				if(type=="syxm"){
					$(".all-syxm>span").removeClass('active');
				}
				if(type=="lsqz"){
					$(".all-lsqz>span").removeClass('active');
				}
				if(type=="cateCode"){
					$(".sf-2 .top>span").addClass('active');
					$('.sf-2 .top>ul>li').removeClass('active');
					params.syxm=null;
					params.lsqz=null;
				}
				getData(params);
			})
			//全部删除标签，请求数据
			$( '.sf-1').on('click','.close-all',function(e){
				params={};
				params.pageNumber=1;
				params.pageSize=20;
				getData(params);
			})
			//鼠标移入移除的动画效果
			$('.shb-list').on('mouseenter','.shb-box',function(e){
				$(this).addClass('active')
			})
			$('.shb-list').on('mouseleave','.shb-box',function(e){
				$(this).removeClass('active')
			})
			//免费咨询按钮去客服页面
			$('.shb-list').on('click','.tokf',function(e){
				e.preventDefault();
				e.stopPropagation();
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
			var token=$('#token').val();
			$('.shb-list').html('');
			$.ajax({
				type:'POST',
				url:'../bdshowmark/getshlist.jhtml',
				data:params,				
			    beforeSend: function(request) {			
				  //$('#btn_save').prop("disabled", true);
				   request.setRequestHeader("token", token);
			     },
				success:function(res){
					if(res.data.length>0){
						var shopHtml="";
						//商品列表数据
						var shopList=res.data;
						for(var i=0,len=shopList.length;i<len;i++){
							var p=shopList[i];
							shopHtml+='<div  class="shb-item" data-id="'+p.id+'">';						
							shopHtml+='<div class="shb-box">';
							shopHtml+='<img src=\"'+'../'+p.xmPic+'\"'+' alt="">';
							shopHtml+='<p class="shb-title">'+p.cateId+'类&nbsp;<abbr title="'+p.markName+'">'+p.markName+'</abbr></p>';
							shopHtml+='<p class="shb-fw">'+(p.names).substring(0,48)+'..</p>';
							shopHtml+='<a href="" class="tokf">免费咨询</a>';
							shopHtml+='</div>';
							shopHtml+='</div>';
						}
						//alert(shopHtml);
						//更新商品列表
						$('.shb-list').html(shopHtml);
						var page="";
						//当前页
						var pageNumber=parseInt(params.pageNumber) || 1;
						//总页数
						totalPage=parseInt(res.totalPage);
						if(pageNumber>1){
							page+='<span class="changePage">上一页</span>';
						}else{
							page+='<span>上一页</span>';
						}
						if(pageNumber-2>0){
							page+='<span class="changePage">'+(pageNumber-2)+'</span>';
						}
						if(pageNumber-1>0){
							page+='<span class="changePage">'+(pageNumber-1)+'</span>';
						}
						page+='<span  class="active changePage" >'+(pageNumber)+'</span>';
						if(pageNumber<totalPage){
							page+='<span class="changePage">'+(pageNumber+1)+'</span>';
						}
						if(pageNumber+1<totalPage){
							page+='<span class="changePage">'+(pageNumber+2)+'</span>';
						}
						if(pageNumber<totalPage){
							page+='<span class="changePage">下一页</span>';
						}else{
							page+='<span>下一页</span>';
						}
						page+='<i>共'+totalPage+'页</i>';
						page+='<i>跳转到</i>';
							page+='<input type="text" class="pageInput">';
								page+='<a href="" class=\'pageBtn\'>确定</a>';
								page+='</div>';
						//更新分页标签
						$('.page-box').html(page);
					}
					
					//更新顶部标签
					var labelHtml='';
					//分类
					if(params.cateCode != null && params.cateCode !="00" && params.cateCode != ""){
						var goodsFamilyStr=cutString(paramsname.cateCodeName,7);
						labelHtml+='<span class="sort">'+goodsFamilyStr+'<span class="sf-close" data-type="cateCode" >×</span></span>';
					}
					//文字类型
					if(params.qmarktype != "-1" && params.qmarktype != null && params.qmarktype != ""){
						var goodsType1Str = "";
						switch (params.qmarktype)
						{
						case "0":
							goodsType1Str="纯中文";
							break;
						case "1":
							goodsType1Str="中文+英文";
							break;
						case "2":
							goodsType1Str="中文+英文（拼音）";
							break;
						case "3":
							goodsType1Str="中文+英文（拼音）+图形";
							break;
						case "4":
							goodsType1Str="图形";
							break;
						case "5":
							goodsType1Str="文字+图形";
							break;
						case "6":
							goodsType1Str="英文（拼音）";
							break;
						case "7":
							goodsType1Str="英文（拼音）+图形";
							break;
						case "8":
							goodsType1Str="含数字";
							break;
						}
						goodsType1Str=cutString(goodsType1Str,7);
						labelHtml+='<span class="sort">'+goodsType1Str+'<span class="sf-close"  data-type="qmarktype">×</span></span>'
					}
					//日期
					if(params.qregdate != "0" && params.qregdate != null && params.qregdate != ""){
						var registDateStr= "";
						switch (params.qregdate)
						{
						case "1":
							registDateStr="1年以上";
							break;
						case "2":
							registDateStr="2年以上";
							break;
						case "3":
							registDateStr="3年以上";
							break;
						case "4":
							registDateStr="4年以上";
							break;
						case "5":
							registDateStr="5年以上";
							break;
						case "6":
							registDateStr="6年以上";
							break;
						}
						labelHtml+='<span class="sort">'+registDateStr+'<span class="sf-close" data-type="qregdate">×</span></span>'
					}
					//数字
					if(params.qworknum != "-1" && params.qworknum != null && params.qworknum != ""){
						var goodsType2Str="";
						switch (params.qworknum)
						{
						case "1":
							goodsType2Str="1个字";
							break;
						case "2":
							goodsType2Str="2个字";
							break;
						case "3":
							goodsType2Str="3个字";
							break;
						case "4":
							goodsType2Str="4个字";
							break;
						case "5":
							goodsType2Str="5个字";
							break;
						case "99":
							goodsType2Str="5个字以上";
							break;
						}
						labelHtml+='<span class="sort">'+goodsType2Str+'<span class="sf-close" data-type="qworknum">×</span></span>'
					}
					//价格
					if(params.qprice != "0" && params.qprice != null && params.qprice != ""){
						var priceStr="";
						switch (params.qprice)
						{
						case "1":
							priceStr="1-2万";
							break;
						case "2":
							priceStr="2-5万";
							break;
						case "3":
							priceStr="5-10万";
							break;
						case "4":
							priceStr="10万以上";
							break;
						}
						labelHtml+='<span class="sort">'+priceStr+'<span class="sf-close" data-type="qprice">×</span></span>'
					}
					//使用项目
					if(params.syxm){
						var syxmStr=cutString(params.syxm,7);
						labelHtml+='<span class="sort">'+syxmStr+'<span class="sf-close" data-type="syxm">×</span></span>'
					}
					//类似群组
					if(params.lsqz){
						var lsqz=params.lsqz.join(",");
						var lsqzStr=cutString(lsqz,7)
						labelHtml+='<span class="sort">'+lsqzStr+'<span class="sf-close" data-type="lsqz">×</span></span>'
					}
					//商品名称
					if(params.markName){
						var goodsNameStr=cutString(params.markName,5);
						labelHtml+='<span class="sort">'+goodsNameStr+'<span class="sf-close" data-type="goodsName">×</span></span>'
					}
					$(".label").html(labelHtml);
					//判断是否有标签，如果有则显示全部删除标签，否则就隐藏全部删除标签
					if($(".label").html()==null || $(".label").html()==""){
						$('.close-all').css({'display':'none'})
					}else{
						$('.close-all').css({'display':'inline-block'})
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