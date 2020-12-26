$(function() {

	$('.main-slider').slick({
		arrows: true,
		centerMode: true,
		centerPadding: '80px',
    	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: false,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		]
  	});

});