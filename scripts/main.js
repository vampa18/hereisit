
$(document).ready(function() {
	
  var headerHeight = $('header').outerHeight(); // Target your header navigation here
  console.log(headerHeight);
	
  $('#main-nav li a').click(function(e) {
  	
  	var targetHref   = $(this).attr('href');
	  
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
	}, 1000);
    
    e.preventDefault();
  });
});

