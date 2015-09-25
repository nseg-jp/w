$(function() {
  $("body").vegas({
    shuffle: true,
    delay: 5000,
    slides: vegas_imgs,
    overlay: 'assets/img/overlay.png',
    timer: false,
    transition: [ 'fade', 'zoomOut', 'blur'],
    animation: 'kenburns'
  });
});
