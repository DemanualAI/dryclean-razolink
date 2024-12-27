(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            mainmenu
        ----------------------------------------------------*/
        $('.mainmenu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: '1199',
        });

        $(".sidebar-toggle-btn").on("click", function () {
            $(".sidebar-wrap").addClass("sidebar-opened");
//            $(".body-overlay").addClass("opened");
        });
        $(".sidebar-close-btn").on("click", function () {
            $(".sidebar-wrap").removeClass("sidebar-opened");
//            $(".body-overlay").removeClass("opened");
        });
       
       $("#nav").on("click", function () {
            $(".sidebar-wrap").removeClass("sidebar-opened");
//            $(".body-overlay").removeClass("opened");
        }); 

         /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/
        ///banner
        var $full = $('.slider-area-full');
            if($full.length > 0){
                $(document).ready(function(){
                    $(".slider-area-full").owlCarousel({
                        loop:true,
                        center:true,
                        items:1,
                        autoplay: true,
                        nav: true,
                        navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
                    });
                });
            }

   /*---------------------------------------------------
            category carousel
        ----------------------------------------------------*/
    var $cate = $('.category-slider');
    if($cate.length > 0){
        $('.category-slider').owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 4
                }
            }
        });
    }

         /*---------------------------------------------------
           project-slider
        ----------------------------------------------------*/
        var $project = $('.project-slider');
        if($project.length > 0){
            $('.project-slider').owlCarousel({
                loop: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 450,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1920: {
                        items: 4
                    }
                }
            });
        }
        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
         var $testi = $('.testi-carousel');
        if($testi.length > 0){
            $('.testi-carousel').owlCarousel({
                loop: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5120,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 455,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        /*---------------------------------------------------
            counter
        ----------------------------------------------------*/
        $('.counter-single span').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });


        /*---------------------------------------------------
                magnific popUp
        ----------------------------------------------------*/
        var $popup = $('.popup-video');
            if($popup.length > 0){
            $('.popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                disableOn: 300
            });
        }
        /*---------------------------------------------------
                countdown
        ----------------------------------------------------*/
        

        });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

 
    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });
    /*---------------------------------------------------
        onePageNav
    ----------------------------------------------------*/
    var $nav = $('#nav');
        if($nav.length > 0){
       $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    }); 
     
  }
 /*---------------------------------------------------
        Scroll Area
    ----------------------------------------------------*/
    var $scroll = $('.scroll-area');
    if($scroll.length > 0){
        $(document).ready(function(){
            $('.scroll-area').click(function(){
                $('html').animate({
                    'scrollTop' : 0,
                },700);
                return false;
            });
            $(window).on('scroll',function(){
                var a = $(window).scrollTop();
                if(a>400){
                    $('.scroll-area').slideDown(300);
                }else{
                    $('.scroll-area').slideUp(200);
                }
            });
        });
    }
}(jQuery));
