$(function() {
  $(window.document.links).filter(function() {
      return this.hostname != window.location.hostname;
  }).attr('target', '_blank');
});

$(function() {
  $(window.document.links).filter(function() {
      return this.hostname != window.location.hostname;
  }).click(function() {
    trackOutboundLink(this.href);
    return false;
  });
});
