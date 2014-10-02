var near = 'Portland, OR';
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
  	var venue = json.response.groups[0].items[0].venue;
  	var restaurantName = venue.name;

  	$('<h1>')
  		.text(restaurantName)
  		.appendTo('body');

  	var photoInfo = venue.photos.groups[0].items[0];
  	var prefix = photoInfo.prefix;
  	var suffix = photoInfo.suffix;
  	var size = "300x300";
  	var url = prefix + size + suffix;

  	$('<img>')
  		.attr('src', url)
  		.attr('alt', 'Image')
  		.appendTo('body');
  },
});
