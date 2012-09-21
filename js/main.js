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
			line = Math.max(1,parseInt($('input[name="line"]').val())),
			w = $('body').width() / col,
			h = $('body').height() / line,
			rect = document.createElementNS("http://www.w3.org/2000/svg" , "g"),
			node,
			svg = $('svg g')[0];

		$('svg rect').remove();

		for(var j = 0; j < col ; j++){
			for(var i = 0; i < line; i++){
		 		//append += '<rect x="'+ j*w +'" y="'+ i*h +'" width="'+ w +'" height="'+ h +'"/>';
		        node=document.createElementNS("http://www.w3.org/2000/svg" ,"rect");
		        node.setAttributeNS(null ,"x",j*w);
		        node.setAttributeNS(null ,"y",i*h);
		        node.setAttributeNS(null ,"width",w);
		        node.setAttributeNS(null ,"height",h);
		        node.setAttributeNS(null ,"fill",'#'+Math.floor(Math.random()*16777215).toString(16));
		        svg.appendChild(node);
		       //append += '<rect x="50" y="50" width="100" height="50" fill="red">';
			}
		}

		//$('svg rect').remove();
		$('svg').attr({
				width: $('body').width(),
				height: $('body').height()
			//	viewport: '0 0 '+ $('body').width() + ' ' + $('body').height()
			});
			//.append(append);
		divs = $('rect');
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
		for(var e = 0;e < l; e++) divs[e].setAttributeNS(null ,"fill",'#'+Math.floor(Math.random()*16777215).toString(16));

	    console.log(id,'run : ', Date.now() - t);
	    timeout_id = setTimeout(run,1000,id);
	    
	}
	
	build();
		
});
