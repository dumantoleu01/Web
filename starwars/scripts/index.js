$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
	navClass: ["slider__nav--left", "slider__nav--right"],
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        900:{
            items:3
        },
        1100:{
            items:4
        }
    }
	});
});