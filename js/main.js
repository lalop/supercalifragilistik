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
		if(timeout_id !== undefined){
			clearTimeout(timeout_id);
		}
		build();
	});

	var timeout_id = undefined,
		divs = $('divs'),
		colors = [
			'ee5454',
			'eeb254',
			'eed654',
			'a7ee54',
			'6dee54',
			'54ee95',
			'54eede',
			'54deee',
			'54b2ee',
			'548aee',
			'5458ee',
			'8354ee',
			'c454ee',
			'fff',
			'222',
			'999',
			'ee54c4'
		],
		cl = colors.length;

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

		timeout_id = setTimeout(run,1000, line*col);
	}

	function run(id){
		var t = Date.now()
		/*divs.each(function(i,e){
			var e = $(e);
			e.css({backgroundColor:'#'+Math.floor(Math.random()*16777215).toString(16) });
		});
			,l = divs.length
		;
		for(var e = 0;e < l; e++) divs[e].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
			*/
			,l = divs.length
		;
		for(var e = 0;e < l; e++) divs[e].className = 'c'+colors[Math.floor(Math.random()*cl)];

	    console.log(id,'run : ', Date.now() - t);
	    timeout_id = setTimeout(run,1000,id);
	    
	}
	
	build();
		
});
