$(document).ready(function () {
	
/*	$('#zipCode').change(function(e) {
		var zip = $(this).val();

		var requestURL = 'http://ziptasticapi.com/' + zip + '?callback=?';
		$.getJSON(requestURL, null, function(data) {
			console.log(data);

			if (data.city) $('#city').val(data.city);
			if (data.state) $('#state').val(data.state);
		});
	});
*/


$('#zip').keyup(function(e) {
		var zip = $(this).val();

		// check that zip code is at least 5 characters and numeric
		if (zip.length === 5 && $.isNumeric(zip)) {

		var requestURL = 'http://ziptasticapi.com/' + zip + '?callback=?';
		$.getJSON(requestURL, null, function(data) {
			console.log(data);

			if (data.city) $('#city').val(data.city);
			if (data.state) $('#state').val(data.state);
		});
		}
	});


});


