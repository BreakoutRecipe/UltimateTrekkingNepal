var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//==============================================================
// CUSTOM SCRIPTS
// Author: Last Door Solutions (http://lastdoorsolutions.com)
// 2011
// ==============================================================


$(document).ready(function() {
// be smart: prevent default behaviour on links with #
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
	});
// Superfish
$('ul.main-nav').superfish({
	delay		: 0
}); 
//$('span.sf-sub-indicator').remove(); 

var href = window.location.href;
if(href.indexOf('/en/')!== -1){
	 $('.english-site').addClass('active');
	$('.error-info a').each(function() {
        	console.log($(this).attr('href'));
			$(this).attr('href', $(this).attr('href')+ 'en');
    });
	}else{
		$('.french-site').addClass('active');
		$('.article-overview a.gray').css('margin-left','0');
		$('.article-overview a.package-book').css('margin-right','20px');
		}

// Maintain Equal Height
//$('.two-col').equalHeights(); // Add as per your requirement

// get Widget title as a widget class

$('.widget_text').each( function(){
	var widgetTitle = $(this).find('.widget-title').text();
	var widgetTitleSlug = widgetTitle.replace(/ /gi, "-");
	widgetTitleSlug = widgetTitleSlug.toLowerCase();
	widgetTitleSlug = "widget-" + widgetTitleSlug;
	$(this).addClass(widgetTitleSlug);
});


// Can also be used with $(document).ready()
$(window).load(function() {
  $('.main-slider').flexslider({
    animation: "slide"
  });
});

if($(".quick-message-box").length>0) {
$(".close-btn").click( function(){
//$(".quick-message-box").fadeOut();
$('.quick-message-box').animate({'right': '-250'}, 1000, function(){
			$('.quick-message-box-ico').show();
		});
});
}

$('.quick-message-box-ico a').click(function(){
	$('.quick-message-box').animate({'right': '0'}, 1000, function(){
			$('.quick-message-box-ico').hide();
		});
	});


$('.highlight-hover-text').hide();
$("ul.highlight-images li").mouseenter(function(){
	$(this).children('.highlight-hover-text').show();
	$(this).children().children('.inner-img').hide();
}).mouseleave(function(){
	$(this).children('.highlight-hover-text').hide();
	$(this).children().children('.inner-img').show();
});

$('.fancybox').fancybox({
	'height' : 'auto',
	'autoDimensions' : false
	});

$(".tooltip").tipTip({
	defaultPosition: "top"
	});


});
// end ready function here.
jQuery(function(){
		jQuery('[id$="-all"] > ul.categorychecklist').each(function() {
			var $list = jQuery(this);
			var $firstChecked = $list.find(':checked').first();

			if ( !$firstChecked.length )
				return;

			var pos_first = $list.find(':checkbox').position().top;
			var pos_checked = $firstChecked.position().top;

			$list.closest('.tabs-panel').scrollTop(pos_checked - pos_first + 5);
		});
	});


}
