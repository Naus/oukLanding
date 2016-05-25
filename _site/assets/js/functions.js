$( document ).ready(function() {

  // funcitions to call ----------------------

  $(function() {
  	smoothScroll(500);
  });


  // smoothScroll function ----------------------

  function smoothScroll (duration) {
  	$('a[href^="#"]').on('click', function(event) {

  	    var target = $( $(this).attr('href') );

  	    if( target.length ) {
  	        event.preventDefault();
  	        $('html, body').animate({
  	            scrollTop: target.offset().top
  	        }, duration);
  	    }
  	});
  }




  function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');

	}, 5000);
};

// Document Ready.
$(function () {
	cycleBackgrounds();
});

});

$('#map-btn').click(function() {
    $('#map').toggle();
});

$('#faq-btn').click(function() {
    $('#faq').toggle();
});

$('#join-btn').click(function() {
    $('#join').toggle();
});

$('#contact-btn').click(function() {
    $('#contact').toggle();
});

$('#beta-btn').click(function() {
    $('#beta').toggle();
});
