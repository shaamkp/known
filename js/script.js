
let mobile_menu=document.querySelector("#mobile-menu")
let overlay=document.querySelector(".overlay")
let close_button=document.querySelector(".close")

close_button.addEventListener("click", ()=>{
  mobile_menu.classList.toggle("active")

  overlay.classList.toggle("active")
  close_button.classList.toggle("active")
})

overlay.addEventListener("click", ()=>{
    mobile_menu.classList.toggle("active")

    overlay.classList.toggle("active")
    close_button.classList.toggle("active")
})

// $('a').smoothScroll();

/* one page nav */

$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    items:3,
    dots: false,
    nav: true,
    loop:true,
    autoplay:true,
    responsive:{
      0:{
        items: 1,
      },
      320:{
          items:1,
      },
      360:{
        items:1,
      },
      393:{
        items:1,
      },
      480:{
        items:1,
      },
      640:{
        items:1,
      },
      768:{
        items:1,
      },
      980:{
        items:1,
      },
      1080:{
        items:3,
    },
    }
  });
})

const config = {
  type:"carousel",
  perView:"3",
  autoplay:4000,
  hoverpause: false,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
}


new Glide('.glide',config).mount({

});