$(function(){
			var url=window.location.href;
			if(url.indexOf("?")!=-1){
				var id=url.split("?")[1].split("=")[1];
			}else{
				id=1
			}
			$.ajax({
				type:"GET",
				url:"****?id="+id,
				dataType:"json",
				success:function(data){
					console.log(data);
					//返回的数据如下
					data:{
						id:'01',
						src:'img/shbDetail/shb1.png',
						title:'柏爱慕',
						goodsFamily:'第25类&nbsp;服装鞋帽',
						goodsType1:'其他',
						jylx:'商标转让',
						lsqz:'2501,2502,2511',
						syfw:'服装，鞋（脚上的穿着物），帽子',

					}
					var html=`<div class="left">
						<img src="${data.src}" alt="">
					</div>
					<div class="right">
						<h1>${data.title}</h1>
						<p><b>商标分类：</b>${data.goodsFamily}</p>
						<p><b>商标类型：</b>${data.goodsType1}</p>
						<p><b>交易类型：</b>${data.jylx}</p>
						<p><b>类似群组：</b>${data.lsqz}</p>
						<p><b>核定使用范围：</b>${data.syfw}</p>
						<h2>咨询电话<b>4009-006-236</b></h2>
						<a href="">在线咨询</a>
					</div>
					<div class="bottom">
						<img src="img/shbDetail/liucheng.jpg" alt="">
					</div>`
				},
				error:function(){
					alert("连接错误，请检查网络！");
				}
			})
		})