// JavaScript Document

$(document).ready(function(){
	
	$("nav").load("nav.html");
	
	$("footer").load("footer.html");
	
	//漢堡選單的點擊效果
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});
	
	//利用偵測螢幕大小判斷是否顯示nav
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});

	
	
	});