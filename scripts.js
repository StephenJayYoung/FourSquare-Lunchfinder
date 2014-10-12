$( "#target" ).submit(function(event) {
	event.preventDefault();
	var near = $('#target input').val();
	var data = {
		near: near,
		section: 'food',
		venuePhotos: '1',

		// required stuffs
		v: '20141002',
		client_id: 'THF0PIAQPEPL3UJZJGVVXKL5S1FM4P54MGZARXUFJ1ZGBENP',
		client_secret: 'PAY5FKCOQB4NI0CSL5XDXNL1AOA2CA2CWTACTYILINBMK4S0'
	};

	$.ajax({
		type: "GET",
	  url: "https://api.foursquare.com/v2/venues/explore",
	  data: data,
	  dataType: "json",

	  success: function(json) {
      var itemsArray = json.response.groups[0].items;
      var randomItem = itemsArray[Math.floor(Math.random() * itemsArray.length)];
      var venue = randomItem.venue;
	  	var restaurantName = venue.name;

	  var $currentVenue = $('#currentVenue');

	  $("h1",$currentVenue).remove();
	  $("img",$currentVenue).remove();

	  	$('<h1>')
	  		.text(restaurantName)
	  		.appendTo('#currentVenue');

	  	var photoInfo = venue.photos.groups[0].items[0];
	  	var prefix = photoInfo.prefix;
	  	var suffix = photoInfo.suffix;
	  	var size = "300x300";
	  	var url = prefix + size + suffix;

	  	$('<img>')
	  		.attr('src', url)
	  		.attr('alt', 'Image')
	  		.appendTo('#currentVenue');
	  },
	});
});