$(function() {
  $.vegas('slideshow', {
    delay: 5000,
    backgrounds: vegas_imgs,
  })('overlay', {
    src:'assets/img/overlay.png'
  });    
});
