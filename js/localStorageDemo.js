//if (Modernizr, localStorage) {
// https://css-tricks.com/video-screencasts/96-localstorage-for-forms/
	$(function() {
		$("#submitBtn").after("<input type='submit' value='Reset Form' id='clearData'>");
		
		$("#submitBtn").click(function(e) {

			// prevent default of submitting form
			e.preventDefault();

			//localStorage.setItem("flag", "set");

			var data = $("#donate").serializeArray();
			console.log(data);

			//http://stackoverflow.com/questions/3029870/jquery-serialize-does-not-register-checkboxes
			 /* Because serializeArray() ignores unset checkboxes and radio buttons: */
    	/*	data = data.concat(
            jQuery('#donate input[type=checkbox]:not(:checked)').map(
                    function() {
                        return {"name": this.name, "value": this.value}
                    }).get()
    		);
    		// data is array function iterates over; i is index; obj is individual data item (key-value pair)
    		// break array into individual objects
    		$.each(data, function(i, obj) {
    			
    			localStorage.setItem(obj.name, obj.value);

    		}); */
			

		});

    	if (localStorage.getItem("flag") == "set") {
    		$("#donations").before("<p>This form has saved data</p>");
    		var data = $("#donate").serializeArray();


		/*	//http://stackoverflow.com/questions/3029870/jquery-serialize-does-not-register-checkboxes
			 Because serializeArray() ignores unset checkboxes and radio buttons: 
    		data = data.concat(
            jQuery('#donate input[type=checkbox]:not(:checked)').map(
                    function() {
                        return {"name": this.name, "value": this.value}
                    }).get()
    		);
    		// data is array function iterates over; i is index; obj is individual data item (key-value pair)
    		// break array into individual objects
*/

    		$.each(data, function(i, obj) {
    			
    			$("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));

    		});
    	}

function showValues() {
	
    var data = $( ":input" ).serializeArray();
    $( "#donations" ).empty();
    $.each( data, function( i, obj ) {
       $("[name='" + obj.name + "')").val(localStorage.setItem(obj.name));
      $( "#donations" ).append( data.value + "<br>" );
    });
  }
 	localStorage[data] = JSON.stringify(data)
  $( ":checkbox, :radio" ).click( showValues );
  $( "select" ).change( showValues );
  showValues();	
});

$("#clearData").click(function() {
    		
    		localStorage.setItem("flag", "");
    	})

//localStorage.clear();
//}