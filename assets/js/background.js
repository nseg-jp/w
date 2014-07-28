$(function() {
  var parent = null;
  var row = null;
  var blk_count = 0;
  var flg = 'even';

  $('#maincontent').children().each(function() {
    if ($(this).prop('tagName') == 'H2') {
      blk_count++;
      parent = null;
    }
    if (parent == null) {
      if (blk_count % 2 != 0) {
        row = null;
      }
      if (row == null) {
        if (flg == 'odd') {
          flg = 'even';
        } else {
          flg = 'odd';
        }
        var section  = $('<div class="section ' + flg + '">');
        $('#maincontent').append(section);
        var container = $('<div class="container">');
        section.append(container);
        row = $('<div class="row">');
        container.append(row);
      }
      parent = $('<div class="col-sm-6">');
      row.append(parent);
    }
    $(this).remove();
    parent.append($(this));
  })
})
