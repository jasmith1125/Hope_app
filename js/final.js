// create a constructor function to contain checkbox properties
$(document).ready(function() {
	$('#submitBtn').click(function() {
		var result = $('input[type="checkbox"]:checked');
		
		if (result.length > 0) {
            var resultArray = result.length;
            
            result.each(function() {
                resultArray += $(this).val() + "<br>";
            });
            
			$('#donations').html(resultArray);
        } 
        else {
            $('#donations').html("no checkbox checked");
        }
	});

});