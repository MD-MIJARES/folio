$(document).ready(function(){

    $('.menubtn').click(function(){
        $('.link_menu').toggleClass("active");
        $('.menubtn').toggleClass("active");
    });

    $('.burgerbtn').click(function(){
        $('.link_menu').toggleClass("active");
    });

    $('.switch1').click(function(){
        $('.switch0').toggleClass("active");
        $('.switch1').toggleClass("active");
    });

    $('.switch0').click(function(){
        $('.switch1').toggleClass("active");
        $('.switch0').toggleClass("active");
    });

    $('.switch1').click(function(){
        $('.pic').toggleClass("active");
        $('.tagline1stbox').toggleClass("active");
        $('.tagline1').toggleClass("active");
        $('.tagline2').toggleClass("active");
        $('.tagline3').toggleClass("active");
    });

    $('.switch0').click(function(){
        $('.pic').toggleClass("active");
        $('.tagline1stbox').toggleClass("active");
        $('.tagline1').toggleClass("active");
        $('.tagline2').toggleClass("active");
        $('.tagline3').toggleClass("active");
    });

    $('.bubbles_on').click(function(){
        $('.bubbles_off').toggleClass("active");
        $('.bubbles_on').toggleClass("active");
        $('.bubbles').toggleClass("active");
        $('.bb').toggleClass("active");
        $('.bb:nth-child').toggleClass("active");
    });

    $('.bubbles_off').click(function(){
        $('.bubbles_on').toggleClass("active");
        $('.bubbles_off').toggleClass("active");
        $('.bubbles').toggleClass("active");
        $('.bb').toggleClass("active");
        $('.bb:nth-child').toggleClass("active");  
    });

    
    $('.about_show').click(function(){
        $('.about_less').toggleClass("active");
        $('.about_show').toggleClass("active");
        $('.cert_mainbox').toggleClass("active");
        $('.piccert').removeClass("show");
        $('.cert_mainbox').removeClass("mainbox");
        $('.bb').toggleClass("bb1");
        
        
    });

    $('.about_less').click(function(){
        $('.about_show').toggleClass("active");
        $('.about_less').toggleClass("active");
        $('.cert_mainbox').toggleClass("active");
        $('.piccert').toggleClass("show");
        $('.cert_mainbox').toggleClass("mainbox");
        $('.bb').removeClass("bb1");

    });

    $('.boxpic').click(function(){
        $('.boxpic').toggleClass("bigboxpic");
        $('.close-btn').toggleClass("active");

    });
    $('.boxpic1').click(function(){
        $('.boxpic1').toggleClass("bigboxpic1");
        $('.close-btn1').toggleClass("active");
    });
    $('.boxpic2').click(function(){
        $('.boxpic2').toggleClass("bigboxpic2");
        $('.close-btn2').toggleClass("active");
    });
    $('.boxpic3').click(function(){
        $('.boxpic3').toggleClass("bigboxpic3");
        $('.close-btn3').toggleClass("active");
    });
    $('.boxpic4').click(function(){
        $('.boxpic4').toggleClass("bigboxpic4");
        $('.close-btn4').toggleClass("active");
    });
    $('.skill-more').click(function(){
        $('.skills-say-more').toggleClass("spanmore");
        $('.skills-say-more').removeClass("spanless");
        $('.skill-less').toggleClass("active");
        $('.skill-more').toggleClass("active");
        
        
    });
    $('.skill-less').click(function(){
        $('.skills-say-more').toggleClass("spanless");
        $('.skills-say-more').removeClass("spanmore");
        $('.skill-less').toggleClass("active");
        $('.skill-more').toggleClass("active");
        
    });
    $('.skill-more1').click(function(){
        $('.skills-say-more1').toggleClass("spanmore1");
        $('.skills-say-more1').removeClass("spanless1");
        $('.skill-less1').toggleClass("active");
        $('.skill-more1').toggleClass("active");
        
        
    });
    $('.skill-less1').click(function(){
        $('.skills-say-more1').toggleClass("spanless1");
        $('.skills-say-more1').removeClass("spanmore1");
        $('.skill-less1').toggleClass("active");
        $('.skill-more1').toggleClass("active");
        
    });
    $('.skill-more2').click(function(){
        $('.skills-say-more2').toggleClass("spanmore2");
        $('.skills-say-more2').removeClass("spanless2");
        $('.skill-less2').toggleClass("active");
        $('.skill-more2').toggleClass("active");
        
        
    });
    $('.skill-less2').click(function(){
        $('.skills-say-more2').toggleClass("spanless2");
        $('.skills-say-more2').removeClass("spanmore2");
        $('.skill-less2').toggleClass("active");
        $('.skill-more2').toggleClass("active");
        
    });
    $('.skill-more3').click(function(){
        $('.skills-say-more3').toggleClass("spanmore3");
        $('.skills-say-more3').removeClass("spanless3");
        $('.skill-less3').toggleClass("active");
        $('.skill-more3').toggleClass("active");
        
        
    });
    $('.skill-less3').click(function(){
        $('.skills-say-more3').toggleClass("spanless3");
        $('.skills-say-more3').removeClass("spanmore3");
        $('.skill-less3').toggleClass("active");
        $('.skill-more3').toggleClass("active");
        
    });
    $('.skill-more4').click(function(){
        $('.skills-say-more4').toggleClass("spanmore4");
        $('.skills-say-more4').removeClass("spanless4");
        $('.skill-less4').toggleClass("active");
        $('.skill-more4').toggleClass("active");
        
        
    });
    $('.skill-less4').click(function(){
        $('.skills-say-more4').toggleClass("spanless4");
        $('.skills-say-more4').removeClass("spanmore4");
        $('.skill-less4').toggleClass("active");
        $('.skill-more4').toggleClass("active");
        
    });

});

$(document).ready(function() {
    function checkVisibility() {
      $('.fade-in').each(function() {
        var sectionPos = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();

        if (sectionPos < scrollPos + windowHeight - 30 && sectionPos + $(this).height() > scrollPos) {
          $(this).addClass('visible');
        } else {
          $(this).removeClass('visible');
        }
      });
    }

    checkVisibility();

    $(window).scroll(function() {
      checkVisibility();
    });

});