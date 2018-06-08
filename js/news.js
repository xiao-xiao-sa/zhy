$(function(){
	var news = new Vue({
			el:'#news',
			data:{
				newsList1:[
					{
						 id:'01',
						 title:'知汇眼知识产权受邀参展',
						 content:'2018年4月19日至21日，由中华人民共和国商务部、科技部、国家知识产权局和上海市人民政府共同主办，第六届中国（上海）国际技术进出口交易会...',
						 time:'2018-04-23'
					},
					{
						 id:'01',
						 title:'知汇眼知识产权受邀参展',
						 content:'2018年4月19日至21日，由中华人民共和国商务部、科技部、国家知识产权局和上海市人民政府共同主办，第六届中国（上海）国际技术进出口交易会...',
						 time:'2018-04-23'
					},
					{
						 id:'01',
						 title:'知汇眼知识产权受邀参展',
						 content:'2018年4月19日至21日，由中华人民共和国商务部、科技部、国家知识产权局和上海市人民政府共同主办，第六届中国（上海）国际技术进出口交易会...',
						 time:'2018-04-23'
					},
					{
						 id:'01',
						 title:'知汇眼知识产权受邀参展',
						 content:'2018年4月19日至21日，由中华人民共和国商务部、科技部、国家知识产权局和上海市人民政府共同主办，第六届中国（上海）国际技术进出口交易会...',
						 time:'2018-04-23'
					},
					{
						 id:'01',
						 title:'知汇眼知识产权受邀参展',
						 content:'2018年4月19日至21日，由中华人民共和国商务部、科技部、国家知识产权局和上海市人民政府共同主办，第六届中国（上海）国际技术进出口交易会...',
						 time:'2018-04-23'
					},
				],
				allPage:12,
				curPage:1,
				toPage:1,
				showPage:6,
				newsList2:[
					{
						id:'01',
						src:'img/news/01.png',
						title:'新闻标题新闻标题'
					},
					{
						id:'02',
						src:'img/news/02.png',
						title:'新闻标题新闻标题'
					},
					{
						id:'03',
						src:'img/news/03.png',
						title:'新闻标题新闻标题'
					}
				],
				mark:0
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
			watch:{
				toPage:function(val){
					console.log(val);
					var reg=/^\d{1,2}$/;
					console.log(reg.test(val));
					if(reg.test(val)){
						this.toPage=val;
					}else{
						this.toPage=1;
					}
				}
			},
			created:function(){
				//pageSize:左侧新闻列表5条新闻，pageNumber：当前页为第一页
				var _this=this;
				this.$http.post("http://",{pageSize:5,pageNumber:1},{emulateJSON: true})
		            .then(
		              	(response)=>{
		                	_this.newsList1=response.newsList1;
		                	_this.newsList2=response.newsList2;
		                	_this.curPage=response.curPage;
		                	_this.allPage=response.allPage;
		              	},
		              	(error)=>{
		                	console.log(error);
		              	}
		            )
			},
			mounted:function(){
				var _this=this;
				setInterval(function(){
					if(_this.mark<2) _this.mark++;
					else _this.mark=0;
				},3000)
			},
			methods:{
				toDetail:function(val){
					console.log(val);
				},
				getNewsList1:function(pageSize,pageNumber){
					var _this=this;
					this.$http.post("http://",{pageSize:pageSize,pageNumber:pageNumber},{emulateJSON: true})
		            .then(
		              	(response)=>{
		                	_this.newsList1=response.newsList1;
		                	_this.curPage=response.curPage;
		                	_this.allPage=response.allPage;
		              	},
		              	(error)=>{
		                	console.log(error);
		              	}
		            )
				}
			}
		})
})