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

 
 var resetForm = function() {
        localStorage.clear();
    }
    var reset = document.getElementById('resetBtn');
    resetBtn.onclick = resetForm;
/*
(function ( $ ) {
    $.fn.FormCache = function( options ) {
        var settings = $.extend({
        }, options );
        
        function on_change(event) {
            var input = $(event.target);
            var key = input.parents('form:first').attr('name');
            var data = JSON.parse(localStorage[key]);
            
            if(input.attr('type') == 'checkbox') {
                data[input.attr('name')] = input.is(':checked');
            }else {
                data[input.attr('name')] = input.val();
            }
            
            localStorage[key] = JSON.stringify(data);
        }
       
        return this.each(function() {    
            var element = $(this);
            
            if(typeof(Storage)!=="undefined"){
                var key = element.attr('name');
                
                var data = false;
                if(localStorage[key]) {
                    data = JSON.parse(localStorage[key]);
                }
                
                if(!data) {
                    localStorage[key] = JSON.stringify({});
                    data = JSON.parse(localStorage[key]);
                }
                element.find('input, select').change(on_change);
                
                element.find('input, select').each(function(){
                    if($(this).attr('type') != 'submit') {
                        var input = $(this);
                        var value = data[input.attr('name')];
                        if(input.attr('type') == 'checkbox') {
                            if(value) {
                                input.attr('checked', input.is(':checked'));
                            } else {
                                input.removeAttr('checked');
                            }
                        } else {
                            input.val(value);
                        }

                    }

                });
                
                
            }
            else {
                alert('local storage is not available');
            }
        });
    };     
}( jQuery ))

$(document).ready(function(){
    $('form').FormCache();
});

*/

// show/hide form checkbox categories
 $(document).ready(function() {

    $('.showHide').on('click', function(event) {        
         $('.items').toggle('show');
    });
});


 function showValues() {
    
    var fields = $( "[type=checkbox]" ).serializeArray();
    $( "#donations" ).empty();
     var val = this.value;
     var donations = document.getElementById('donations');
        if (val != "") {
            donations.innerHTML ="<h3>The items you have chosen to donate:</h3>";
         }
                jQuery.each( fields, function( i, field ) {
                  $( "#donations" ).append( field.value + "<br>" );
                  
               });
}
  
  $( "[type=checkbox]" ).click( showValues );
  
 

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

// Form validation


// Ajax
/* window.onload = function(){

        var city = document.getElementById("city");
        var state = document.getElementById("state");
        var zip = document.getElementById("zip");

        zip.addEventListener("change", getGeo);

        function getGeo(e){

            // make an send an XmlHttpRequest
            var x = new XMLHttpRequest();
            x.open("GET","http://maps.googleapis.com/maps/api/geocode/json?address="+this.value,true);
            x.send();

            // set up a listener for the response
            x.onreadystatechange=function(){
                if (this.readyState==4 && this.status==200){
                    //alert(this.response);
                    var o = this.response;
                    document.getElementById("output").innerHTML = o;
                    var l = JSON.parse(this.response).results[0].geometry.address_components[1];
                    if (l.city) {
                        city.value = l.long_name;
                    }
                    if (l.state) {
                        state.value = l.long_name;
                    } 

                }
            }


        }

        

    } */



    

    


}); //end window.onload
