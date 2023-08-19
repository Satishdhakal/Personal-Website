$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Developer", "Learner",  "Content Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Developer", "Learner",  "Content Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $(".wd").click(function(){
        location.href = "web design button/index.html";
      });

    $(".ad").click(function(){
         location.href = "advertising/index.html";
    });

    $(".ve").click(function(){
        location.href = "video editing/index.html";
    });

    $(".prox").click(function(){
        location.href = "https://discord.com/api/oauth2/authorize?client_id=844815311991603200&permissions=0&scope=bot";
    });

    
    $(".diana").click(function(){
        location.href = "https://discord.com/api/oauth2/authorize?client_id=989077336517402674&permissions=0&scope=bot";
    });

    $(".quiz").click(function(){
        location.href = "https://quiznepal.netlify.app";
    });

    $(".tictactoe").click(function(){
        location.href = "tictactoe/index.html";
    });

    $(".stopwatch").click(function(){
        location.href = "stopwatch/index.html";
    });

    $(".hire").click(function(){
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });
});
