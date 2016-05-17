$(document).ready(function(){
	$(".toggleNav").click(function (){
		$(".list").slideToggle("slow");
	});
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var $section = $($anchor.attr('href'));
        var scrollPos = $section.offset().top + $section.outerHeight() - $(window).height();

        $('html, body').stop().animate({
            scrollTop: scrollPos
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });
});

//Boton arriba
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});

