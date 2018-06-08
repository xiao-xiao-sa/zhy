$(function(){
	var searchDetail=new Vue({
			el:"#searchDetail",
			data:{
				shbClassify:['01类-化学原料','02类-涂料油漆','03类-日化用品','04类-燃料油脂','05类-医药品','06类五金金属','07类-机械设备','08类-手工器械','09类-科学仪器','10类-医药设备','11类-灯具空调','11类-灯具空调','13类-军火烟火','14类-珠宝钟表','15类-乐器','16类-办公用品','17类-橡胶制品','18类-皮革皮具','19类-建筑材料','20类-家具','21类-厨房洁具','22类-绳网袋篷','23类-纱线丝','24类-布料床单','25类-服装鞋帽','26类-纽扣拉链','27类-地毯席垫','28类-健身器材','29类-食品','30类-方便食品','31类-饲养种子','32类-啤酒饮料','33类-酒','34类-烟草烟具','35类-广告销售','36类-金融物管','37类-建筑修理','38类-通讯服务','39类-运输储藏','40类-材料加工','41类-教育娱乐','42类-网站服务','43类-餐饮住宿','44类-医疗园艺','45类-社会服务'],
				goodsFamilyIndex:100,
				//使用项目
				shbXiangmu:[
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
				],
				//类似群组
				shbLxqz:[
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
				],
				//注册年限
				registDateList:['不限','满1年','满2年','满3年','满4年','满5年','满5年以上'],
				registDateIndex:0,
				//分类
				goodsType1List:['不限','中文','英文','图形','拼音','数字','其他'],
				goodsType1Index:0,
				//数字
				goodsType2List:['不限','1-2字','3字','4字','4字以上','纯图','其他'],
				goodsType2Index:0,
				//价格区间
				priceList:['不限','0-3万','3万-5万','5万-10万','10万以上'],
				priceIndex:0,
				isShowAll:false,
				allPage:12,
				curPage:1,
				toPage:1,
				showPage:6,
				shopList:[
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					},
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					},
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					},
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					},
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					},
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					},
					{
						id:'01',
						src:'img/search/img.png',
						title:'柏爱慕',
						goodsFamily:'第25类',
						syfw:'服装，鞋（脚上的穿着物），帽子',
					}
				],
				goodsNumber:'',
				//商品名称
				goodsName:'',
				//注册号
				registNumber:'',
				//商品类别
				goodsFamily:'',
				//类似群组
				goodsGroup:'',
				//注册日期
				registDate:'',
				//商品类型1
				goodsType1:'',
				//商品类型2
				goodsType2:'',
				//价格区间
				price:'',
				//人气，默认升序排列
				renqi:'top',
				//新品,根据时间，默认升序排列
				xinpin:'top',
				pageSize:30
			},
			computed:{
		        pages:function(){
		            var pag = [];
		                if( this.curPage < this.showPage ){ //如果当前的激活的项 小于要显示的条数
		                    //总页数和要显示的条数那个大就显示多少条  
		                    var i = Math.min(this.showPage,this.allPage);
		                    while(i){
		                    	pag.unshift(i--);
		                    }
		                }else{ //当前页数大于显示页数了
		                    var middle = this.curPage - Math.floor(this.showPage / 2 ),//从哪里开始
		                        i = this.showPage;
		                    if( middle >  (this.allpage - this.showPage)  ){
		                        middle = (this.allpage - this.showPage) + 1
		                    }
		                    while(i--){
		                        pag.push( middle++ );
		                    }
		                }
		            return pag;
		        }
		    },
		    filters:{
		    	changeLength:function(val){
		    		if(val.length>6){
		    			return val.slice(0,5)+"···";
		    		}
		    	}
		    },
			methods:{
				//获取商品列表
				getShopList:function(pageSize,pageNumber){
					console.log(this);
					var _this=this;
					var goodsFamily=this.goodsFamily;
					var goodsType1=this.goodsType1;
					var registDate=this.registDate;
					var goodsType2=this.goodsType2;
					var price=this.price;
					var goodsName=this.goodsName;
					console.log( goodsFamily,goodsType1,registDate,goodsType2,price,goodsName);
					this.$http.post("http://",{pageSize:pageSize,pageNumber:pageNumber,goodsFamily:goodsFamily,goodsType1:goodsType1,registDate:registDate,goodsType2:goodsType2,price:price,goodsName:goodsName},{emulateJSON: true})
		            .then(
		              	(response)=>{
		                	_this.shopList=response.shopList;
		                	_this.curPage=response.curPage;
		                	_this.allPage=response.allPage;
		              	},
		              	(error)=>{
		                	console.log(error);
		              	}
		            )
				},
				addActive:function($event){
					$event.currentTarget.className="shb-box active";
				},
				removeActive:function($event){
					$event.currentTarget.className="shb-box";
				},
				isShow:function(){
					this.isShowAll=!this.isShowAll;
				},
				changeName:function(e){
					this.goodsName=e.target.value;

				},
				changegoodsType1:function(val){
					this.goodsType1Index=val;
					this.goodsType1=this.goodsType1List[val];
					this.getShopList(30,1);
				},
				changegoodsType2:function(val){
					this.goodsType2Index=val;
					this.goodsType2=this.goodsType2List[val];
					this.getShopList(30,1);
				},
				changeprice:function(val){
					this.priceIndex=val;
					this.price=this.priceList[val];
					this.getShopList(30,1);
				},
				changeregistDate:function(val){
					this.registDateIndex=val;
					this.registDate=this.registDateList[val];
					this.getShopList(30,1);
				},
				changegoodsFamily:function(val){
					if(val==100){
						this.goodsFamilyIndex=val;
						this.goodsFamily='';
					}else{
						this.goodsFamilyIndex=val;
						this.goodsFamily=this.shbClassify[val];
					}
					this.getShopList(30,1);
				},
				delet:function(val){
					//console.log(val);
					switch(val){
						case this.goodsFamily:
							this.goodsFamily='';
							this.goodsFamilyIndex=100;
							break;
						case this.goodsName:
							this.goodsName='';
							break;
						case this.price:
							this.price='';
							this.priceIndex=0;
							break;
						case this.registDate:
							this.registDate='';
							this.registDateIndex=0;
							break;
						case this.goodsType1:
							this.goodsType1='';
							this.goodsType1Index=0;
							break;
						case this.goodsType2:
							this.goodsType2='';
							this.goodsType2Index=0;
							break;
					}
					this.getShopList(30,1);
				},
				deletAll:function(){
					this.goodsFamily='';
					this.goodsName='';
					this.price='';
					this.registDate='';
					this.goodsType1='';
					this.goodsType2='';
					this.goodsType1Index=0;
					this.goodsType2Index=0;
					this.priceIndex=0;
					this.registDateIndex=0;
					this.goodsFamilyIndex=100;
					this.getShopList(30,1);
				},
				toDetail:function(id){
					window.open("shbDetail.html?id="+id);
				},
				tokf:function(e){
					e.preventDefault();
					window.open("http://p.qiao.baidu.com/cps/chat?siteId=12023627&userId=25605932");
				}
			},
			created:function(){
				var url=decodeURI(location.href);
				console.log(url)
				var params=[];
				if(url.indexOf("?")!=-1){
					var obj=url.split("?")[1].split("&");
					if(obj.length>0){
						for(var i=0;i<obj.length;i++){
							var a=obj[i].split("=");
							params[a[0]]=a[1];
						}
					};
					this.goodsNumber=params['goodsNumber'] || '';
					this.goodsName=params['goodsName'] || '';
					this.registNumber=params['registNumber'] || '';
					this.goodsFamily=params['goodsFamily'] || '';
					console.log(this.goodsFamily)
					this.goodsGroup=params['goodsGroup'] || '';
					//注册日期转成注册年限
					if(params['registDate']){
						var t1=new Date(params['registDate']);
						var t2=new Date();
						var t=parseInt((t2-t1)/1000/3600/24/365);
						if(t==1){
							this.registDate="满1年";
						}else if(t==2){
							this.registDate="满2年";
						}else if(t==3){
							this.registDate="满3年";
						}else if(t==4){
							this.registDate="满4年";
						}else if(t==5){
							this.registDate="满5年";
						}else if(t>5){
							this.registDate="满5年以上";
						}else{
							this.registDate="不限";
						}
					}
				};
				this.getShopList(30,1);
				
				
			}
			
		})
})