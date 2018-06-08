$(function(){
	var storeDetail= new Vue({
			el:'#storeDetail',
			data:{
				detail:{
					//id
					id:'',
					//标题
					title:'河南地区婴儿推车床旗舰店老买家动态全红诚心出售',
					//价格
					price:'800000',
					//出价次数
					cjcs:'0',
					//商标名称
					shbName:'商标名称',
					//商标持有者
					shbOwn:'',
					//是否过户
					isGh:'是',
					//商标类型
					shbType:'R标（第05、08、10、11、16、23、24类）',
					//商标小类
					shbTypex:'05 08 10 11 16 23 24',
					//公司名称
					gsName:'网络公司',
					//注册日期
					zcDate:'2015年11月20日',
					//注册资金
					zczj:'200万',
					//纳税人资质
					nszz:'一般纳税人',
					//法院公告
					fygg:'无',
					//法院判决
					fypj:'无',
					//失信信息
					sxxx:'无',
					//行政处罚
					xzcf:'无',
					//经营状态
					jyzt:'正常',
					//税务状态
					swzt:'正常',
					//年报状态
					nbzt:'已更新到2017年',
					//股东人数
					gdrs:'2'
				},
				show:false
			},
			methods:{
				showName:function(){
					this.show=!this.show;
				}
			},
			created:function(){
				var _this=this;
				var url=window.location.href;
				if(url.indexOf("?")!=-1){
					var id=url.split("?")[1].split("=")[1];
					this.$http.post("http://",{id:id},{emulateJSON: true})
		            .then(
		              	(response)=>{
		                	_this.detail=response.detail;
		              	},
		              	(error)=>{
		                	console.log(error);
		              	}
		            )
				}
			},
			filters:{
				douhao:function(val){
					return parseInt(val).toLocaleString();
				}
			}
		})
})