;(function($) {
    "use strict"; 

    // sticky header js
    window.onscroll = function () {
        var header = document.querySelector("header");
        if (window.pageYOffset > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
    
    // mobile menu js
    $('.mobile-menu-opner').on('click', function(){
        $('.overlay, .main-menu-wrapper').addClass('active');
    });
    $('.mobile-close-btn, .overlay').on('click', function(){
        $('.overlay, .main-menu-wrapper').removeClass('active');
    });
    

     
    // partner section slider js
    var swiper = new Swiper(".banner-section-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 3000,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 'auto',
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    });

    
    var swiper1 = new Swiper(".services-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 3000,
        loop: true,
        autoplay: {
          delay: 'auto',
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-prev1",
          prevEl: ".swiper-button-next1",
        },
        breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
    
    var swiper1 = new Swiper(".builder-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 3000,
        loop: true,
        autoplay: {
          delay: 'auto',
          disableOnInteraction: false,
        },
        breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var swiper1 = new Swiper(".client-saying-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 3000,
        loop: true,
        autoplay: {
          delay: 'auto',
          disableOnInteraction: false,
        },
        breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
    


       //data backgroud image js
      $(document).ready(function () { 
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
      })

      //* Isotope js
    
      $(document).ready(function () {
        if ( $('.project-section').length ){ 
            // Activate isotope in container
            $(".programmation-inner").imagesLoaded( function() {
                $(".programmation-inner").isotope({
                    layoutMode: 'masonry',  
                }); 
            });  
            // Add isotope click function 
            $(".programmation-filter li").on('click',function(){
                $(".programmation-filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".programmation-inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    });


 
    AOS.init();

})(jQuery);