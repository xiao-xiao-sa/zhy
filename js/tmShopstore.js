$(function(){
	var tmshop=new Vue({
			el:'#tmshop',
			data:{
				//商城类型
				shcType:['不限','旗舰店','专营店','专卖店'],
				//商标类型
				shbType:['不限','R标','TM标'],
				//所属行业
				hyType:['不限','服装鞋包','美容护理','数码电器','游戏/话费','母婴','户外活动','家装家饰','家具用品','珠宝/首饰','生活服务','汽车配件','书籍音像','玩乐/收藏','手机','大家电','其他行业'],
				//当前选中的商城类别
				curShcType:'',
				shcTypeIndex:0,
				//当前选中的商标类型
				curShbType:'',
				shbTypeIndex:0,
				//当前选中的所属行业
				curHyType:'',
				hyTypeIndex:0,
				//后台返回的查询数据
				tmshopList:[
					{
						id:'01',
						//图片
						src:'img/tmdp/tianmao.png',
						//标题
						title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
						//价格
						price:'80.0',
						//是否独家
						isDj:'独家',
						//所属行业
						hyType:'母婴',
						//所在地区
						area:'华中地区',
						//商城类型
						shcType:'旗舰店',
						//商标类型
						shbType:'TM标',
						//纳税资质
						nszz:'一般纳税人',
						//消费金
						xfj:'50000.0',
						//技术年费
						jsnf:'30000.0',
						//动态评分
						dtpf:'',
						//违规扣分
						wgkf:'0-0-0',
						//是否带待
						isDk:'否',
						//卖家描述
						mjms:'店铺动态全红，无扣分，高销量，商标有10个类别可以给买家选择，商标少一个价格可以少一万，因本人有多项目在做，忙不过来，诚心出售',
						//一级类目
						type:'一级类目：尿片/洗护/喂哺/推车床',
						//是否公司认证
						isRz:'公司认证',
						//可当面交易
						isFace:'可当面交易'
					},
					{
						id:'02',
						src:'img/tmdp/tianmao.png',
						title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
						price:'80.0',
						isDj:'独家',
						hyType:'母婴',
						area:'华中地区',
						shcType:'旗舰店',
						shbType:'TM标',
						nszz:'一般纳税人',
						xfj:'50000.0',
						jsnf:'30000.0',
						dtpf:'',
						wgkf:'0-0-0',
						isDk:'否',
						mjms:'店铺动态全红，无扣分，高销量，商标有10个类别可以给买家选择，商标少一个价格可以少一万，因本人有多项目在做，忙不过来，诚心出售',
						type:'一级类目：尿片/洗护/喂哺/推车床',
						isRz:'公司认证',
						isFace:'可当面交易'
					},
					{
						id:'03',
						src:'img/tmdp/tianmao.png',
						title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
						price:'80.0',
						isDj:'独家',
						hyType:'母婴',
						area:'华中地区',
						shcType:'旗舰店',
						shbType:'TM标',
						nszz:'一般纳税人',
						xfj:'50000.0',
						jsnf:'30000.0',
						dtpf:'',
						wgkf:'0-0-0',
						isDk:'否',
						mjms:'店铺动态全红，无扣分，高销量，商标有10个类别可以给买家选择，商标少一个价格可以少一万，因本人有多项目在做，忙不过来，诚心出售',
						type:'一级类目：尿片/洗护/喂哺/推车床',
						isRz:'公司认证',
						isFace:'可当面交易'
					},
					{
						id:'04',
						src:'img/tmdp/tianmao.png',
						title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
						price:'80.0',
						isDj:'独家',
						hyType:'母婴',
						area:'华中地区',
						shcType:'旗舰店',
						shbType:'TM标',
						nszz:'一般纳税人',
						xfj:'50000.0',
						jsnf:'30000.0',
						dtpf:'',
						wgkf:'0-0-0',
						isDk:'否',
						mjms:'店铺动态全红，无扣分，高销量，商标有10个类别可以给买家选择，商标少一个价格可以少一万，因本人有多项目在做，忙不过来，诚心出售',
						type:'一级类目：尿片/洗护/喂哺/推车床',
						isRz:'公司认证',
						isFace:'可当面交易'
					},
					{
						id:'05',
						src:'img/tmdp/tianmao.png',
						title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
						price:'80.0',
						isDj:'独家',
						hyType:'母婴',
						area:'华中地区',
						shcType:'旗舰店',
						shbType:'TM标',
						nszz:'一般纳税人',
						xfj:'50000.0',
						jsnf:'30000.0',
						dtpf:'',
						wgkf:'0-0-0',
						isDk:'否',
						mjms:'店铺动态全红，无扣分，高销量，商标有10个类别可以给买家选择，商标少一个价格可以少一万，因本人有多项目在做，忙不过来，诚心出售',
						type:'一级类目：尿片/洗护/喂哺/推车床',
						isRz:'公司认证',
						isFace:'可当面交易'
					},
					{
						id:'06',
						src:'img/tmdp/tianmao.png',
						title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
						price:'80.0',
						isDj:'独家',
						hyType:'母婴',
						area:'华中地区',
						shcType:'旗舰店',
						shbType:'TM标',
						nszz:'一般纳税人',
						xfj:'50000.0',
						jsnf:'30000.0',
						dtpf:'',
						wgkf:'0-0-0',
						isDk:'否',
						mjms:'店铺动态全红，无扣分，高销量，商标有10个类别可以给买家选择，商标少一个价格可以少一万，因本人有多项目在做，忙不过来，诚心出售',
						type:'一级类目：尿片/洗护/喂哺/推车床',
						isRz:'公司认证',
						isFace:'可当面交易'
					}
				],
				allPage:6,
				curPage:1,
				toPage:1,
				showPage:6
			},
			watch:{
				curShcType:function(){
					this.getTmShopList(6,1);
				},
				curShbType:function(){
					this.getTmShopList(6,1);
				},
				curHyType:function(){
					this.getTmShopList(6,1);
				},
				toPage:function(){

				}
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
		            console.log(pag);
		            return pag;
		        }
		    },
			methods:{
				ChangeShcType:function(val){
					this.shcTypeIndex=val;
					this.curShcType=this.shcType[val];
				},
				ChangeShbType:function(val){
					this.shbTypeIndex=val;
					if(val==0){
						this.curShbType='';
					}else{
						this.curShbType=this.shbType[val];
					}
					
				},
				ChangeHyType:function(val){
					this.hyTypeIndex=val;
					if(val==0){
						this.curHyType='';
					}else{
						this.curHyType=this.hyType[val];
					}
					
				},
				delet:function(val){
					switch(val){
						case this.curShcType:
							this.curShcType=this.shcType[0];
							this.shcTypeIndex=0;
							break;
						case this.curShbType:
							this.curShbType=this.shbType[0];
							this.shbTypeIndex=0;
							break;
						case this.curHyType:
							this.curHyType=this.hyType[0];
							this.hyTypeIndex=0;
							break;
					}
					console.log(this.curShbType,this.shbTypeIndex);
					getTmShopList(6,1)
				},
				getTmShopList:function(pageSize,pageNumber){
					var _this=this;
					if(this.curShcType=='不限'){this.curShcType=''};
					if(this.curShbType=='不限'){this.curShbType=''};
					if(this.curHyType=='不限'){this.curHyType=''};
					var params={
						pageSize:pageSize,
						pageNumber:pageNumber,
						shcType:this.curShcType,
						shbType:this.curShbType,
						hyType:this.curHyType
					};
					console.log(params);
					this.$http.post("http://",params,{emulateJSON: true})
		            .then(
		              	(response)=>{
		                	_this.tmshopList=response.tmshopList;
		                	_this.curPage=response.curPage;
		                	_this.allPage=response.allPage;
		              	},
		              	(error)=>{
		                	console.log(error);
		              	}
		            )
				},
				toStoreDetail:function(val){
					window.location.href="storeDetail.html?id="+val;
				}
			},
			created:function(){
				this.getTmShopList(6,1);
			}
		});
})