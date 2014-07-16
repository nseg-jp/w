$(function() {
  var parent = null;
  var flg = 'odd';
  $('#maincontent').children().each(function() {
    if ($(this).prop('tagName') == 'H2') {
      parent = null;
    }
    if (parent == null) {
      var section;
      if (flg == 'odd') {
        section  = $('<div class="section odd">');
        flg = 'even';
      } else {
        section  = $('<div class="section even">');
        flg = 'odd';
      }
      $('#maincontent').append(section);
      parent = $('<div class="container">');
      section.append(parent);
    }
    $(this).remove();
    parent.append($(this));
  })
})
