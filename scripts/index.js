$('#foursquareVenueURL').on('paste', function() {
  setTimeout(function() {
    if ($('#foursquareVenueURL').val()) {
      console.log('foursquare://venues/' + _.last($('#foursquareVenueURL').val().split('/')));
      window.location = 'foursquare://venues/' + _.last($('#foursquareVenueURL').val().split('/'))
    }
  }, 0);
})
$('#clear-input').click(function() {
  $('#foursquareVenueURL').val('');
});