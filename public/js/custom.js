
  $(window).load(function () {
    $('#JiSlider').JiSlider({color: '#fff', start: 3, reverse: true}).addClass('ff')
  })


  $(document).ready(function() {
      $('.ziehharmonika').ziehharmonika({
        collapsible: true,
        prefix: ''
      })
    })


    $('.counter').countUp();


    $(function(){
      $("#bars li .bar").each(function(key, bar){
        var percentage = $(this).data('percentage');

        $(this).animate({
          'height':percentage+'%'
        }, 1000);
      })
    })


    $(window).load(function(){
      $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
        $('body').removeClass('loading');
      }
      })
    })

    jQuery(document).ready(function($) {
      $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
      })
    })

    $(document).ready(function() {

      $().UItoTop({ easingType: 'easeOutQuart' })

      })
