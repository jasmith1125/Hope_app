

	// something to try for adding function to items and contact: $(document).on("click", "#buttonOne, #buttonTwo", function () {
    //function here
	//});  from: http://stackoverflow.com/questions/10558173/jquery-attach-click-to-multiple-variables

// https://css-tricks.com/video-screencasts/96-localstorage-for-forms/
// persists form data 
 /*$(function() {
		$("#submitBtn").after("<input type='submit' value='Reset Form' id='clearData'>");
		
		$(".items").click(function(e) {

			// prevent default of submitting form
			//e.preventDefault();

			// collect data from form
			var data = $("#donate").serializeArray();
			console.log(data); 
		
			// iterate over results
			$.each(data, function(i, obj) {
			// HTML5 magic!!
			localStorage.setItem(obj.name, obj.value);
		});				
				
	});
			// test if there is already saved data	
    		localStorage.getItem("obj.name") == "obj.value") 
    			// put header on donations div
    			$("#donations").before("<p>Your list of donations:</p>");
    		
	    		// iterate over results collect data from form
				var data = $("#donate").serializeArray();
    			$.each(data, function(i, obj) {
    			
    			$("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));

    		}); //end .each
    	


		// Provide mechanism to remove data. You'd probably actually remove it not just kill the flag
		$("#clearData").click(function(e) {
				
				e.preventDefault();
				
				localStorage.setItem("flag", "");
				
			}); 
		
	}); 
	/*
	function showValues() {
		var sel1 = document.getElementById('sel1');
	    var fields = $( ":input" ).serializeArray();
	   
	    $( "#donations" ).empty();
	    $.each( fields, function( i, field ) {
	      $( "#donations" ).append( field.value + "<br>" );
	      localStorage.setItem(i, field);
	    }); // end each
	  } // end showValues
  
  $( ":checkbox" ).click( showValues );
  	
  $( "select" ).change( showValues );
  showValues();

// end localStorage  */

$(function() {
		
		$("#items").click(function(e) {

			// prevent default of submitting form
			//e.preventDefault();

		  var frm = $("#donate");
         
		  var dataArray = JSON.stringify(frm.serializeArray());
            
             
           console.log(dataArray);
    		// break array into individual objects
              
    	   localStorage.setItem("myData", JSON.stringify(dataArray));
	         
            var s = JSON.parse(window.localStorage.getItem("myData"));
                for (var i = 0; i < s.length; i++) {
                	document.getElementById("donations").innerHTML = s[i];
                }

         
console.log("\nHere's the stringified object returned from localStorage");
console.log(window.localStorage.getItem("myData"));

console.log("\nHere's the object returned from localStorage and parsed back to an object");
console.log(s);
		}); 	
});


 // show/hide form checkbox categories
 $(document).ready(function() {

    $('.showHide').on('click', function(event) {        
         $('.items').toggle('show');
    });
});
/*
 function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#donations" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#donations" ).append( field.value + "<br>" );
    });
  }
 
  $( ":checkbox, :radio" ).click( showValues );
  //$( "select" ).change( showValues );
 
  showValues(); */

  var serv = [
    [''],
    ['Service Type', 'Car repairs', 'Pro Bono Legal Help', 'Landscaping', 'Tree Trimming', 'Plumbing Service', 'Electrical Service', 'Carpentry'],
    ['Service Type','Resident Tutor', 'Resident Mentor', 'Resident Event Planner'],
    ['Service Type', 'Donation Pickup', 'Clean Vacant Unit', 'Paint Vacant Unit', 'Stock Vacant Unit']
];

// Create secondary menu of pet breeds/alternate types
function createServMenu () {
    // Get the index from the primaryMenu selection
    var selection = this.selectedIndex
    // Get the secondary menu and assign to a variable
    var list = document.getElementById("servMenu");
    // Remove elements from secondary (pet breed) menu
    list.innerHTML = '';
    
    // For the selected index, add OPTION elements
    for (var i = 0; i < serv[selection].length; i++) {
        var newOpt = document.createElement("OPTION");
        // Create text node to hold the array items
        var text  = document.createTextNode(serv[selection][i]);
        // Append text node to option element
        newOpt.appendChild(text);
        // Append option element to the secondary select menu
        list.appendChild(newOpt);
    }        
}
// Add an event handler to generate secondary menu when a selection
// is made in the primary menu
document.getElementById("primaryMenu").onchange = createServMenu;

// End select box
