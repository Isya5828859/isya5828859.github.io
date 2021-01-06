$(document).ready(function(){
    $("#carousel-box1").owlCarousel({
        items: 6,
        margin: 10,
        responsiveClass:true,
        responsive:{
            0:{
                items: 3,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });
  });