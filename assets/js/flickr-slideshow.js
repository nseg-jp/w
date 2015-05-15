$(function() {
  $.vegas('slideshow', {
    delay: 5000,
    backgrounds: vegas_imgs,
  })('overlay', {
    src:'{{ site.assets }}/img/overlay.png'
  });    
});
