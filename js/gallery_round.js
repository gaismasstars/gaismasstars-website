$(document).ready(function() {
	
	var z_ind=[];
	var position=[];
	var active=1;
	
	for (var i=1; i<=amount; i++){
		$('#ban'+i).data('num',i);
		topi=$('#ban'+i).css('top');
		lefti=$('#ban'+i).css('left');
		position[i]={top:topi, left:lefti};
		z_ind[i]=$('#ban'+i).css('z-index');
	}
	$('#ban1').addClass('active');
	$('#gallery .banner').css({left:'-600px'});
	$('#ban1 .banner').stop().animate({left:'0'},400, easing);
	function summ(a,b){
		if (a+b==amount) {return (a+b)} else return (a+b) % amount;
	}
	function left(i){
		$('#gallery li').removeClass('active');
			$('#ban'+i).css('z-index',z_ind[1]);
		$('#gallery .banner').stop().animate({left:'-600'},400, easing, function(){
																											 
			$('#ban'+i).find('.banner').stop().animate({left:'0'},400, easing)		 
		})
		for (var j=1; j<amount; j++) {
				$('#ban'+summ(i,j)).stop().animate(position[j+1],speed, easing);
				$('#ban'+summ(i,j)).css('z-index',z_ind[j+1]);	
			}
			$('#ban'+i).stop().animate(position[1],speed, easing);
			$('#ban'+i).addClass('active');										
	}
	$('#gallery li').click(function(){
		
	})
	$('#gallery li').click(function(){
		active=	$(this).data('num')						
		left(active);
	})
	var fl=true;
	function next(){
		if (fl) {
			if (active==amount) {active=1} else {active++}
			left(active);
		}
	}
	setInterval(next,8000)
	$('#gallery').hover(function(){fl=false}, function(){fl=true})
});
