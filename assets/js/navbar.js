$(function() {
  var nav = $('#nav');
  var offset = nav.offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() > offset.top) {
      nav.css({'position':'fixed',
               'top':'0',
               'width':'100%',
               'z-index':'10000'});
    } else {
      nav.css({'position':'',
               'top':'',
               'width':'',
               'z-index':''});
    }
  });
});
