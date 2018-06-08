$(function(){
	var shbMarket=new Vue({
			el:'#shbMarket',
			data:{
				shbClassify:['01类-化学原料','02类-涂料油漆','03类-日化用品','04类-燃料油脂','05类-医药品','06类五金金属','07类-机械设备','08类-手工器械','09类-科学仪器','10类-医药设备','11类-灯具空调','11类-灯具空调','13类-军火烟火','14类-珠宝钟表','15类-乐器','16类-办公用品','17类-橡胶制品','18类-皮革皮具','19类-建筑材料','20类-家具','21类-厨房洁具','22类-绳网袋篷','23类-纱线丝','24类-布料床单','25类-服装鞋帽','26类-纽扣拉链','27类-地毯席垫','28类-健身器材','29类-食品','30类-方便食品','31类-饲养种子','32类-啤酒饮料','33类-酒','34类-烟草烟具','35类-广告销售','36类-金融物管','37类-建筑修理','38类-通讯服务','39类-运输储藏','40类-材料加工','41类-教育娱乐','42类-网站服务','43类-餐饮住宿','44类-医疗园艺','45类-社会服务'],
				shbDetail:[
					{	
						//商标类型
						type:'特价商标',
						//商标类型图片
						src:'img/shbMarket/tejia.png',
						//该类型下的八个商标
						list:[
							{id:0,src:'img/shbMarket/shb1.png',title:'皇略',goodsFamily:'第25类'},
							{id:1,src:'img/shbMarket/shb3.png',title:'瓦系',goodsFamily:'第25类'},
							{id:2,src:'img/shbMarket/shb5.png',title:'拾设',goodsFamily:'第25类'},
							{id:3,src:'img/shbMarket/shb7.png',title:'石寻',goodsFamily:'第25类'},
							{id:4,src:'img/shbMarket/shb2.png',title:'束时',goodsFamily:'第25类'},
							{id:5,src:'img/shbMarket/shb4.png',title:'觅设',goodsFamily:'第25类'},
							{id:6,src:'img/shbMarket/shb6.png',title:'欧团',goodsFamily:'第25类'},
							{id:7,src:'img/shbMarket/shb8.png',title:'束石',goodsFamily:'第25类'}
						]
					},
					{
						type:'精品商标',
						src:'img/shbMarket/jingpin.png',
						list:[
							{id:8,src:'img/shbMarket/shb9.png',title:'竹式',goodsFamily:'第25类'},
							{id:9,src:'img/shbMarket/shb11.png',title:'竹系',goodsFamily:'第25类'},
							{id:10,src:'img/shbMarket/shb13.png',title:'麦馆',goodsFamily:'第25类'},
							{id:11,src:'img/shbMarket/shb15.png',title:'潮瓦',goodsFamily:'第25类'},
							{id:12,src:'img/shbMarket/shb10.png',title:'婉院',goodsFamily:'第25类'},
							{id:13,src:'img/shbMarket/shb12.png',title:'媛返',goodsFamily:'第25类'},
							{id:14,src:'img/shbMarket/shb14.png',title:'一悟一制',goodsFamily:'第25类'},
							{id:15,src:'img/shbMarket/shb16.png',title:'爵例',goodsFamily:'第25类'}
						]
					}
				],
				//商品编号
				goodsNumber:'',
				//商品名称
				goodsName:'',
				//注册号
				registNumber:'',
				//商品类别
				goodsFamily:'-请选择-',
				//类似群组
				goodsGroup:'',
				//注册日期
				registDate:'',
				//商品类型1
				goodsType1:[],
				//商品类型2
				goodsType2:'不限',
			},
			watch:{
				goodsNumber:function(){
					console.log(this.goodsNumber);
				},
				goodsName:function(){},
				registNumber:function(){},
				goodsFamily:function(){
					console.log(this.goodsFamily);
				},
				goodsGroup:function(){},
				registDate:function(){},
				goodsType1:function(){},
				goodsType2:function(){}
			},
			methods:{
				search:function(e){
					e.preventDefault();
					console.log(this.goodsNumber);
				},
				toDetail:function(id){
					console.log(id);
					window.location.href="shbDetail.html?id="+id
				},
				enter:function(e){
					$(e.target).addClass("active");
				},
				leave:function(e){
					$(e.target).removeClass("active");
				},
				//点击45个分类去往搜索详情页面
				toSearchDetail1:function(goodsFamily){
					var url="searchDetail.html?goodsFamily="+goodsFamily;
					window.location.href=encodeURI(url);
				},
				//点击搜索按钮去往搜索详情页面
				toSearchDetail2:function(){
					var goodsNumber = this.goodsNumber,
					goodsName = this.goodsName,
					registNumber = this.registNumber,
					goodsFamily = this.goodsFamily,
					goodsGroup = this.goodsGroup,
					registDate = this.registDate;
					var params="";
					if(goodsNumber){
						if(params){
							params+="&goodsNumber="+goodsNumber;
						}else{
							params+="goodsNumber="+goodsNumber;
						}
						
					}
					if(goodsName){
						if(params){
							params+="&goodsName="+goodsName;
						}else{
							params+="goodsName="+goodsName;
						}
						
					}
					if(registNumber){
						if(params){
							params+="&registNumber="+registNumber;
						}else{
							params+="registNumber="+registNumber;
						}
						
					}
					if(goodsFamily!= "-请选择-" && goodsFamily!=""){
						if(params){
							params+="&goodsFamily="+goodsFamily;
						}else{
							params+="goodsFamily="+goodsFamily;
						}
						
					}
					if(goodsGroup){
						if(params){
							params+="&goodsGroup="+goodsGroup;
						}else{
							params+="goodsGroup="+goodsGroup;
						}
						
					}
					if(registDate){
						if(params){
							params+="&registDate="+registDate;
						}else{
							params+="registDate="+registDate;
						}
						
					}
					if(params){
						var url=encodeURI("searchDetail.html?"+params);
					}else{
						var url=encodeURI("searchDetail.html");
					}
					window.location.href=url;

				}
			},
			created:function(){
				var _this=this;
				this.$http.post("http://",{emulateJSON: true})
		            .then(
		              	(response)=>{
		              		//获取shbDetail的内容
		                	_this.shbDetail=response.shbDetail;
		              	},
		              	(error)=>{
		                	console.log(error);
		              	}
		            )
			}
		});
})