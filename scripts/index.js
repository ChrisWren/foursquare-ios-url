function isMobileBrowser() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

$('#foursquareVenueURL').on('paste', function() {
  setTimeout(function() {
    var iOSUrl = 'foursquare://venues/' + _.last($('#foursquareVenueURL').val().split('/'));
    if (isMobileBrowser()) {
      window.location = iOSUrl;
    } else {
      $('#foursquareVenueURL').val(iOSUrl)
      $('#foursquareVenueURL').select()
      // $('<textarea name="" id="new-textarea">'+ iOSUrl +'</textarea>').appendTo('body')
      // var el = document.getElementById("new-textarea");
      // selectElementContents(el);
    }
  }, 0);
})

$('#clear-input').click(function() {
  $('#foursquareVenueURL').val('');
});

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );
  //
  client.on( "copy", function (event) {
    var clipboard = event.clipboardData;
    clipboard.setData( "text/plain", $('#foursquareVenueURL').val() );
  });

  client.on( "aftercopy", function( event ) {
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );