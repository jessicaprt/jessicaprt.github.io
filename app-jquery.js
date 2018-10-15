$(document).ready(function(){
    $(".header > .Navigation .mainNav .container .navbar-collapse .navbar-nav > .linkItem > a")
        .on('click', function(event) {
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

	var src = $('.header').css('background-image');
	var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
	
	var img = new Image();
	img.onload = function() {
		$('#loadingIndicator').addClass('stopLoading');
	}
	img.src = url;
	if (img.complete) img.onload();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
  });