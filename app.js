//  HERO-BANNER STARTS
$('.hero-link a').fancybox({
    caption : function( instance, item ) {}
  });
// HERO-BANNER ENDS


// COUNTER STARTS
var a = 0;
$(window).scroll(function () {
    var oTop = $(".multi-card").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});

// COUNTER ENDS


// TABBER STARTS
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tabber-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})


    $(window).on('load resize orientationchange', function() {
        if ($(window).width() > 767) {
         
        }
        else{
          $(function() {
            var list = $('.tabs');
            var link = $('.mobile-view');
            link.click(function(e) {
              e.preventDefault();
              list.slideDown(200);
            });
            list.find('li').click(function() {
              var text = $(this).html();
              link.html(text);
              list.slideUp(200);
            });
          });
          
        }
      });

})
// TABBER ENDS