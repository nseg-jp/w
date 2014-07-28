$(function() {
  var btnToTop = $('#scroll-to-top');
  btnToTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      btnToTop.fadeIn();
    }else{
      btnToTop.fadeOut();
    }
  });
  btnToTop.click(function () {
    $('body, html').animate({scrollTop:0}, 500, 'swing');
    if (history.pushState) {
      	history.pushState(null, null, '#');
    }
   return false;
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
