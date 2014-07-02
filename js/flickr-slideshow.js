---
---
function _getFlickrPhotos(data) {
  if (data.stat == 'ok') {
    var bgs = [];
    $.each(data.photos.photo, function(i, item) {
      var itemFarm = item.farm;
      var itemServer = item.server;
      var itemID = item.id;
      var itemSecret = item.secret;
      var itemTitle = item.title;
      var itemPath = 'http://farm' + itemFarm + '.static.flickr.com/' + itemServer + '/' + itemID + '_' + itemSecret + '_n.jpg';
      bgs.push({ src: itemPath, fade: 2000 });
    });
    bgs.sort(function() { return Math.random() - 0.5; });
    $.vegas('slideshow', {
      delay: 5000,
      backgrounds: bgs,
    })('overlay', {
      src:'{{ site.assets }}/img/overlay.png'
    });    
  } else {
    alert(data.message);
  }
}

$(function() {
  $.ajax({
    type : 'GET',
    url : 'https://www.flickr.com/services/rest/',
    data : {
      format : 'json',
      method : 'flickr.photos.search',
      api_key : '{{ site.flickr.api_key }}',
      //group_id : '{{ site.flickr.group_id }}',
      tags: '{{ site.flickr.tags }}',
      sort : '{{ site.flickr.sort }}',
      privacy_filter: '{{ site.flickr.privacy_filter }}',
      per_page : '{{ site.flickr.per_page }}'
    },
    dataType : 'jsonp',
    jsonp : 'jsoncallback',
    success : _getFlickrPhotos
  });
});
