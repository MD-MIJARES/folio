$(document).ready(function(){

    $('.menulist2').click(function(){
      $('.change-theme').toggleClass("active");
      $('.arrow1').toggleClass("active");
      $('.arrow2').toggleClass("active");
    });

    $('.theme2').click(function(){
      $("#css").prop("href", "style1.css");
      $("#body").toggleClass("active2");
      $("#body").removeClass("active1");
    });

    $('.theme1').click(function(){
      $("#css").prop("href", "style.css");
      $("#body").toggleClass("active1");
      $("#body").removeClass("active2");
    });

    $('.menubtn').click(function(){
        $('.link_menu').toggleClass("active");
        $('.menubtnclose').toggleClass("active");
        $('.menubtn').toggleClass("active")
    });

    $('.menubtnclose').click(function(){
        $('.link_menu').toggleClass("active");
        $('.menubtnclose').toggleClass("active");
        $('.menubtn').toggleClass("active")
    });
    
    $('.switch1').click(function(){
        $('.switch0').toggleClass("active");
        $('.switch1').toggleClass("active");
        $('.wrapper').toggleClass("active");
    });

    $('.switch0').click(function(){
        $('.switch1').toggleClass("active");
        $('.switch0').toggleClass("active");
        $('.wrapper').toggleClass("active");
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

    $('.background-color-box').click(function(){
        $('.background-color-box').toggleClass("active");
        $('.background-list').toggleClass("active");
        $('.background-btn-open').toggleClass("active");
        $('.right').toggleClass("active");

    });

    $('.background-color1').click(function(){ 
        $('.neon-lights').toggleClass("neon-light1");
        $('.neon-lights').removeClass("neon-light2");
        $('.neon-lights').removeClass("neon-light3");
        $('.neon-lights').removeClass("neon-light4");
    });

    $('.background-color2').click(function(){ 
        $('.neon-lights').toggleClass("neon-light2");
        $('.neon-lights').removeClass("neon-light1");
        $('.neon-lights').removeClass("neon-light3");
        $('.neon-lights').removeClass("neon-light4");   
    });

    $('.background-color3').click(function(){  
        $('.neon-lights').toggleClass("neon-light3");
        $('.neon-lights').removeClass("neon-light1");
        $('.neon-lights').removeClass("neon-light2");
        $('.neon-lights').removeClass("neon-light4");   
    });
    
    $('.background-color4').click(function(){  
        $('.neon-lights').toggleClass("neon-light4");
        $('.neon-lights').removeClass("neon-light1");
        $('.neon-lights').removeClass("neon-light3");
        $('.neon-lights').removeClass("neon-light2");  
    });

    var words = ['Hi, I like HTML', 'I also like CSS, JavaScript, PHP, and MySQL.', 'Building High-Performance WEBSITE That Thrive Results.'];
var part;
var i = 0;
var offset = 0;
var len = words.length;
var forwards = true;
var skip_count = 0;
var skip_delay = 15;
var speed = 90;

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.tagline_content').text(part);
  }, speed);
};

$(document).ready(function () {
    wordflick();
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