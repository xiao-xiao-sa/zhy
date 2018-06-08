$(function(){
	var newsDetail = new Vue({
			el:"#newsDetail",
			data:{
				news:{
					id:'01',
					title:'2018年4月19日至21日，第六届中国（上海）国际技术进出口交易会',
					time:'2018-05-06 09:40:20',
					liulan:'120',
					laiyuan:'来源：知汇眼知识产权',
					content:'此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容 此处是新闻内容 '
				},
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
			created:function(){
				var _this=this;
				var id=window.location.href.split("?")[1].split("=")[1];
				this.$http.post("http://",{id:id},{emulateJSON: true})
		            .then(
		              	(response)=>{
		                	_this.news=response.news;;
		                	//获取news的数据 
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
			}
		})
})