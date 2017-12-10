$(document).ready(function(){
	var  allTabs = $('.slideshow-container').find('.tab-content > div'),
	tabMenu = $('.slideshow-container').find('.tab-menu li');
	
	allTabs.not(':first-of-type').hide();
	
	tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  	});
  
  	allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  	});
  
  	tabMenu.on('click', function(){
		var dataTab = $(this).data('tab');
		var container = $(this).closest('.slideshow-container');
		
		container.find('.tab-menu li').removeClass('active-tab');
		$(this).addClass('active-tab');
    	container.find('.tab-content > div').hide();
    	container.find('.tab-content > div').filter('[data-tab='+dataTab+']').show();
  	});
	
	$('a[href="#full-feature-mode"]').on('click',function(){

			$('#easy-mode').removeClass('active-tab');
			$('#full-feature-mode').addClass('active-tab');
			$('div.easy-mode').hide();
			$('div.full-feature-mode').show();				
	});
	
		$('a[href="#easy-mode"]').on('click',function(){
    	
			$('#full-feature-mode').removeClass('active-tab');
			$('#easy-mode').addClass('active-tab');
			$('div.full-feature-mode').hide();
			$('div.easy-mode').show();			
	});


});










