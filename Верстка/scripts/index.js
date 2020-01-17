$('.review-cards').slick({
  
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:3000
      
      }
    },
	  {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:3000
      
      }
    }
  ]
});