$(function(){

	$(".zan").click(function(){
		if($(this).hasClass("hover"))
		{
			$(this).removeClass("hover");
			var i = parseInt($(this).find("span").html());
			$(this).find("span").html(i-1);
		}
		else{
			$(this).addClass("hover");
			var i = parseInt($(this).find("span").html());
			$(this).find("span").html(i+1);
		}
	});
	
	
	$(".pinglun_zan").click(function(){
		if($(this).hasClass("hover"))
		{
			$(this).removeClass("hover");
			var i = parseInt($(this).find("span").html());
			$(this).find("span").html(i-1);
			if(i-1==0)
			{
				$(this).find("span").html("赞");
			}
		}
		else{
			$(this).addClass("hover");
			var i = parseInt($(this).find("span").html());
			if(isNaN(i))
			{
				i = 0;
			}
			
			$(this).find("span").html(i+1);
			
		}
	});
	
	
	$(".huifu").click(function(){
		if($(this).hasClass("hover"))
		{
			$(this).removeClass("hover");
			$(this).parents(".bottom_tool").find(".pinglun_huifu").hide();
		}
		else{
			$(this).addClass("hover");
			$(this).parents(".bottom_tool").find(".pinglun_huifu").show();
		}
	});

	$(".shouc").click(function(){
		if($(this).hasClass("hover"))
		{
			$(this).removeClass("hover");
			$(this).find("span").html("收藏");
		}
		else{
			$(this).addClass("hover");
			$(this).find("span").html("已收藏");
			
		}
	});









});
