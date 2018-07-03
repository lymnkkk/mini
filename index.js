$(function(){
	// 划过菜单
	// $('#nav .center .link li a').hover(function(index){
	// 	$(this).parent().css('border-bottom','4px solid #fff');
	// },function(){
	// 	$(this).parent().css('border-bottom','none');
	// })

	// 设置banner 内的元素
	// 设置banner高度
	$('#banner').css('height',$('#banner img').css('height'));
	// alert(($('#banner img').width()-$('#banner ul').width())/2);

	// 设置banner 小圆点居中
	var left=($('#banner img').width()-$('#banner ul').width())/2;
	$('#banner ul').css('left',left);

	// 设置左箭头
	var toLeft=($('#banner img').height()-$('#banner .left').height())/2;
	$('#banner .left').css('top',toLeft);

	// 设置右箭头
	var toRight=($('#banner img').height()-$('#banner .right').height())/2;
	$('#banner .right').css('top',toRight);

	

	$(window).resize(function(){
		$('#banner').css('height',$('#banner img').css('height'));
		left=($('#banner img').width()-$('#banner ul').width())/2;
		$('#banner ul').css('left',left);

		toLeft=($('#banner img').height()-$('#banner .left').height())/2;
		$('#banner .left').css('top',toLeft);

		toRight=($('#banner img').height()-$('#banner .right').height())/2;
		$('#banner .right').css('top',toRight);
	})
	

	// 轮播器
	$('#banner img').css('opacity','0');
	$('#banner img').eq(0).css('opacity','1');
	$('#banner ul li').eq(0).css('color','#07153d');

	// 存储下一个轮播图
	var banner_index=1;

	// 存储当前轮播图
	var origin_index=0;

	// 自动轮动
	var banner_timer=setInterval(banner_fn,3000);
	
	// 轮播左边
	$('#banner .left').click(function(){
		clearInterval(banner_fn);
		// 点的颜色 蓝色rgb(7, 21, 61)
		var size=$('#banner img').size();
		for(var i=0;i<size;i++){
			if($('#banner ul li').eq(i).css('color')=='rgb(7, 21, 61)'){
				if(i==0){
					banner_index=$('#banner img').size()-1;
				}else{
					banner_index=i-1;
				}
				origin_index=i;
				// alert(banner_index);
			}
		}
		banner($('#banner ul li').get(banner_index),origin_index);
		// alert($('#banner img').size());
		// alert($('#banner ul li').eq(0).css('color'));
	})

	// 轮播右边
	$('#banner .right').click(function(){
		clearInterval(banner_fn);
		// 点的颜色 蓝色rgb(7, 21, 61)
		var size=$('#banner img').size();
		for(var i=0;i<size;i++){
			if($('#banner ul li').eq(i).css('color')=='rgb(7, 21, 61)'){
				if(i==$('#banner img').size()-1){
					banner_index=0;
				}else{
					banner_index=i+1;
				}
				origin_index=i;
				// alert(banner_index);
			}
		}
		banner($('#banner ul li').get(banner_index),origin_index);
		// alert($('#banner img').size());
		// alert($('#banner ul li').eq(0).css('color'));
	})

	function banner(obj,prev){
		$('#banner ul li').css('color','#fff');
		$(obj).css('color','#07153d');

		$('#banner img').eq(prev).animate({opacity:0},'slow').css('zIndex','1');
		$('#banner img').eq($(obj).index()).animate({opacity:1},'slow').css('zIndex','2');
	}
	
	function banner_fn(){
		if(banner_index>=$('#banner img').size()) banner_index=0;
		banner($('#banner ul li').get(banner_index)
			,banner_index==0 ? $('#banner img').size()-1 :banner_index-1);
		banner_index++;
	}

	
	

})