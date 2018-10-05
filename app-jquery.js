$(document).ready(function(){
    $("a").on('click', function(event) {
		var valid_hashes = ["#about-me", "#projects", "#blog", "#instagram", "#contact"];
		if (jQuery.inArray(this.hash, valid_hashes) != -1) {
			console.log(this.hash);
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});

    $(window).scroll( function(){
        $('.hide-element').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({
                    'opacity':'1'			
                }, 500);
                
                $(this).removeClass("hide-element");
            }
        }); 
    }); 
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        console.log("SHRINK!");
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
  });