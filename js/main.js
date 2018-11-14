 $(document).ready(function() {

//nav change color on scroll 
     
$(document).scroll(function () {
    $('nav, .navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
 
//close mobile menu on li click and body click
     
$('.navbar-nav>li>a, body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
     
// Rellax parallax
     
  var rellax = new Rellax('.rellax', {
//    wrapper: '.rellax-wrap',
    speed: -1,
    center: true,
//    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  
     
//GSAP + Scroll Magic
    
// init
    
var controller = new ScrollMagic.Controller();
            
//GSAP tweens
     
//home pager banner timeline 
     
var tl = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.from(".navy-bg", 0.2, {autoAlpha:0, ease: SlowMo.easeIn})
 
//slide down navbar     
.from("nav", 0, {autoAlpha:0, y:-100})
     
//fade in navbar logo + nav links
.staggerFrom(".navbar-brand, .nav-item, .navbar-toggler", 0.2, {autoAlpha:0, y:-10, rotation:-20}, 0.1)

//fade in Jaxx Liberty Logo
.from("#home .jaxx-logo", 0.8, {autoAlpha: 0, y: -20, ease: SlowMo.easeInOut}, "-=0.25")
         
//fade out multi device bg
.to("#home #jaxx-multi-device", 0.4, {autoAlpha:0, display: "none", ease: SlowMo.ease.config(0.1, 0.4, false)}, "-=0.25")

// fade out Jaxx Liberty Logo
.to("#home .jaxx-logo", 0.7, {autoAlpha: 0, display: "none", ease: SlowMo.easeInOut}, "-=0.25")

//fade in orange-bg 
.from("#home .orange-bg", 0.5, {autoAlpha:0, ease: SlowMo.easeInOut})

//fade out navy-bg 
.to("#home .navy-bg", 0, {autoAlpha:0, ease: SlowMo.easeInOut})

// stagger in site tag line individual words
.staggerFrom("#home .banner-span", 0.25, {y:-100, autoAlpha:0, ease: SlowMo.easeInOut}, 0.1)

//fade in tag line sub titles
.staggerFrom(".sub-tagline-1, .sub-tagline-2, .sub-tagline-3", 0.25, {y:-20, autoAlpha:0, ease: SlowMo.easeInOut}, 0.1)
   
//fade out orange-bg
.to("#home .orange-bg", 0.5, {autoAlpha:0, ease: SlowMo.easeInOut}) 
 
//fade in heart logo
.from("#home .jaxx-icon", 0.2, {y:-20, autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.25")

//add a label 0.5 seconds later to mark the placement of the next tween
.from("#home .banner-button", 0.3, {autoAlpha:0, ease: SlowMo.easeIn}, "-=0.25")
  
//fade in arrow down
.from("#home .icon", 0.5, {autoAlpha:0, y:-10, ease: SlowMo.easeIn}, "-=0.25")
.to("#home .icon", 2, {y:-10, ease: SlowMo.easeInOut, repeat:-1});

     
// individual tweens
      
//fade in

$(".fade-in-slow").each(function() {

 	var fadeIn = TweenMax.from(this, 3, {autoAlpha: 0, delay: 0, ease: SlowMo.easeInOut}, .5);

	var scene0 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeIn)
		.addTo(controller);
}); 
   
//fade out
     
$(".fade-out").each(function() {

 	var fadeOut = TweenMax.to(this, 2, {autoAlpha: 0, delay: 0, ease: SlowMo.easeInOut});

	var scene0 = new ScrollMagic.Scene({
	        triggerElement: this,
	        triggerHook: 'onLeave',
	        offset: 0,
	        reverse:true
	    })
		.setTween(fadeOut)
		.addTo(controller);
}); 
     
//fade + enter left - scene 1

$(".fade-in-left").each(function() {

 	var fadeLeft = TweenMax.from(this, 1, {
	        x: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeLeft)
		.addTo(controller);
});
     
     //fade + enter left - scene 1

$(".fade-in-right").each(function() {

 	var fadeRight = TweenMax.from(this, 1, {
	        x: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power4.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeRight)
		.addTo(controller);
});
     
//fade in up 
     
$(".fade-in-up").each(function() {

 	var fadeUp = TweenMax.from(this, 1, {
	        y: 100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power4.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeUp)
		.addTo(controller);
});
     
     
//fade in down 
     
$(".fade-in-down").each(function() {

 	var fadeDown = TweenMax.from(this, 1, {
	        y: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power4.easeInOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeDown)
		.addTo(controller);
});
     
//  fade/slide out left
     
     $(".fade-right").each(function() {

 	var fadeRight = TweenMax.to(this, 2, {
	        autoAlpha: 0,
            x:1000,
	        delay: 0,
	        ease: Power2.easeOut
	    });

	var scene = new ScrollMagic.Scene({
	        triggerElement: this,
	        triggerHook: 'onLeave',
	        offset: 0,
	        reverse:true
	    })
		.setTween(fadeRight)
		.addTo(controller);
}); 
     
//  slide in from right
     
     $(".slide-in-right").each(function() {

 	var slideInRight = TweenMax.from(this, 1.2, {autoAlpha: 0, x:-1000, delay: 0, ease: Elastic.easeInOut.config(1, 1)});

	var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 'onEnter', offset: 0, reverse:true})
		.setTween(slideInRight)
		.addTo(controller);
}); 
    
     
//slide in from right
     
     $(".slide-in-left").each(function() {

 	var slideInLeft = TweenMax.from(this, 1.2, {autoAlpha: 0, x:1000, delay: 0, ease: Elastic.easeInOut.config(1, 1)});

	var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 'onEnter', offset: 0, reverse:true})
		.setTween(slideInLeft)
		.addTo(controller);
});  
    
// stagger + content tweens

$(".single-tween-item").each(function() {

 	var tween = TweenMax.from(this, .6, {
	        y: 40,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene2 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(tween)
		.addTo(controller);
});


// stagger tween scene 3 

$(".stagger-tween").each(function() {
  
  var stagger = TweenMax.staggerFrom($(this).find(".stagger-tween-item"), 1, {
    y: 40,
    autoAlpha: 0,
    delay: 0,
    ease: Power2.easeOut
  },
  0.3);

	var scene3 = new ScrollMagic.Scene({
	        triggerElement: this,
            triggerHook: 'this',
	        reverse:true
	    })
		.setTween(stagger)
		.addTo(controller);
});
      

//content-tweens scene 4
        
$(".content-tween").each(function() {
  
  var contentTweenTL = new TimelineMax({
    repeat:0,
  });
  
  var contentTween = contentTweenTL.from($(this).find(".content-tween-left"), 0.5, {x: -200, autoAlpha: 0, delay: 0, ease: Power4.easeInOut}, .1)
  .from($(this).find(".content-tween-right"), 0.5, {x: 200, autoAlpha: 0, delay: 0, ease: Power4.easeInOut}, .1)
  .from($(this).find(".content-tween-up"), 0.5, {y: 200, autoAlpha: 0, delay: 0, ease: Power4.easeInOut}, .1)
  .from($(this).find(".content-tween-down"), 0.5, {y: -200, autoAlpha: 0, delay: 0, ease: Power4.easeInOut}, .1)
  .staggerFrom($(this).find(".content-stagger-up"), 0.8, {y: 200, autoAlpha: 0, delay: 0, ease: Back.easeInOut.config(1.7)}, .1);

	var scene4 = new ScrollMagic.Scene({
	        triggerElement: this,
//            triggerHook: '0.7',
            triggerHook: 'onEnter',
	        offset: -100,
			reverse:true
	    })
		.setTween(contentTween)
		.addTo(controller);
});
    
//end all doc ready
});

//smooth scroll --> https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#homeBanner a, #contents a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
      });
    } // End if
  });
});
