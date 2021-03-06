"use strict";

$(function(){


	$('#fullscreen').on('click',function(){
		var docElm = document.documentElement;
		if (docElm.requestFullscreen) {
		    docElm.requestFullscreen();
		}
		else if (docElm.mozRequestFullScreen) {
		    docElm.mozRequestFullScreen();
		}
		else if (docElm.webkitRequestFullScreen) {
		    docElm.webkitRequestFullScreen();
		}
	});

	$('input').on('change',function(){console.log('change');

		if(timeout_id !== undefined){
			clearTimeout(timeout_id);
		}
		build();
	});

	$('body').css({
		height: $(document).height()
	});
	$(window).resize(function(){
      		$('body').css({
                	height: $(window).height()
        	});
	});

	var timeout_id = undefined,
		divs = $('divs');

	function build(){

		var append = '',
			col = Math.max(1,parseInt($('input[name="column"]').val())),
			line = Math.max(1,parseInt($('input[name="line"]').val()));
		for(var j = 0; j < col ; j++){
			for(var i = 0; i < line; i++){
		 		append += '<div style="width:'+ (100/col) +'%;height:'+ (100/line) +'%" />';
			}
		}

		divs.remove();
		$('body').append(append);
	
		divs = $('div');

		setTimeout(run,1000);
	}

	function run(){
		
		divs.each(function(i,e){
			var $e = $(e);
			$e.css({backgroundColor:'#'+Math.floor(Math.random()*16777215).toString(16) });
		});
	    setTimeout(run,1000);
	}
	
	build();
		
});
