
// From this tutorial: http://www.lynda.com/Ajax-tutorials/Solution-ZIP-code-lookup/150163/155373-4.html
$(document).ready(function () {
	
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


// hide city and state form fields until zip code is entered
 $(document).ready(function() {
 	var zip = document.getElementById('zip');
 	var city = document.getElementById('city');
 	var state = document.getElementById('state');

 	if (zip.match(/[0-9]*/)) { 
    $('zip').keyup(function() {        
         $('city').show('slow');
         $('state').show('slow');
     }
    });
});
