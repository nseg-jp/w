$(function() {
  vegas_imgs.sort(function() { return Math.random() - 0.5; });

  $.vegas('slideshow', {
    delay: 5000,
    backgrounds: vegas_imgs,
  })('overlay', {
    src:'assets/img/overlay.png'
  });
});
