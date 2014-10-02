console.log('working');

$.ajax({
	type: "GET",
  url: "https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&section=food&v=20141002&client_id=THF0PIAQPEPL3UJZJGVVXKL5S1FM4P54MGZARXUFJ1ZGBENP&client_secret=PAY5FKCOQB4NI0CSL5XDXNL1AOA2CA2CWTACTYILINBMK4S0&venuePhotos=1",
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
  	console.log(url);

  	// display it
  	//   append to body part

  	$('<img>')
  		.attr('src', url)
  		.attr('alt', 'Image')
  		.appendTo('body');

  	// var near = Portland, OR;
  },
});



// $(function() {
//     $.ajax({
//         type: "GET",
//         url: "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=b944cc8b49d1fefb91be5009980232c0&format=json&nojsoncallback=1&auth_token=72157647854321898-cf20a8088a540415&api_sig=20332eae5cb39101438ea4d92c4b5323",
//         dataType: "json",
//         success: function (json) {
// 					// 1. console.log json object (did that, removed it)
// 					// 2. iterate through the image objects
// 					// 2a. find the image objects from json
// 					var photos = json.photos.photo;
// 					$.each(photos, function(key, photo) {
// 						// 3. add images to the body
// 						// 3b. figure out real image source
// 						var farmID = photo.farm;
// 						var serverID = photo.server;
// 						var id = photo.id;
// 						var secret = photo.secret;
// 						var imageURL = 'https://farm' +
// 							farmID + '.staticflickr.com/' +
// 							serverID + '/' +
// 							id + '_' +
// 							secret + '.jpg';

// 						$('<img>') // 3a. create an image
// 							.attr('src', imageURL)
// 							.attr('alt', 'Image')
// 							.appendTo('body'); // 3c. add to body
// 					});

//         },
//         error: function(xhr, status, error) {
//         	console.log(xhr);
//         	console.log(status);
//         	console.log(error);
//         }
//     });
// });
