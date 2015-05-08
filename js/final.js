// create a constructor function to contain checkbox properties
/*$(document).ready(function() {
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

$(document).ready(function() {
    $('#submitBtn').click(function() {
        var resultArray = [];
        $.each($("input[name='item']:checked"), function() {
                resultArray.push($(this).val());
            });
            
            $('#donations').html(resultArray);
        } 
    
    });

}); 

 $(document).ready(function() {
        $("#submitBtn").click(function(){
            var resultArray = [];
            $.each($("input[name='item']:checked"), function(){            
                resultArray.push($(this).val());
                console.log(resultArray);
            }); 

           $('#donations').html(resultArray.join("<br>"));
        });
    });   

function getSelectedBoxes(frm) {
// holder for item array
 var resultArray = [];

 // get input tags
 var inputFields = document.getElementsByTagName('input');
 // get number of input fields
 var len = inputFields.length;

 // traverse input fields and adds value of checked boxes in resultArray
 for (var i=0; i<len; i++) {
    if (inputFields[i].type == 'checkbox' && inputFields[i].checked == true) {
        resultArray.push(inputFields[i].value);
    }  //end if
    return resultArray;
 } //end for
} // end getSelectedBoxes
 document.getElementById('submitBtn').onclick = function() {

    var resultArray = getSelectedBoxes(this.form);
    alert(resultArray);
 } 


$("#submitBtn").click(function(event){
    event.preventDefault();
    var items = $("#contact input:checkbox:checked").map(function(){
      return $(this).val();
    }); // <----
    $('#donations').html(items);
    
    });
  });*/
// function that writes item input to html page

$(document).ready(function() {
    $('#donateForm').click(function() {
        
        // get the checked checkboxes
        var result = $('input[type="checkbox"]:checked');
        // make a place to put the array
        var resultArray = [];
        // loop through checked checkboxes and get values
        for (var i = 0; i < result.length; i++) {
            resultArray.push([i].value);
        }  //end for
            result.each(function() {
                 resultArray += $(this).val() + "<br>";
               $('#donations').html(resultArray);  
            }); //end each 
               
    }); //end click

});
/*
// local storage plugin code adapted from :http://elikirk.com/store-form-data-with-html5-localstorage-and-jquery/
// commented extensively to illustrate that I understand what is happening/why code is included
(function ( $ ) {
    $.fn.FormCache = function( options ) {
        // .extend() gives flexibility to pass in parameters
        var settings = $.extend({
        }, options );
        // when input item is changed (event.target), the function runs
        function on_change(event) {
            // get form element that has changed
            var input = $(event.target);
            // get parent form and find the name of the changed element
            var key = input.parents('form').attr('name');
            // enables recovery of JSON data from local storage
            var data = JSON.parse(localStorage[key]);

            // check to see whether checkbox element is checked
            if(input.attr('type') == 'checkbox') {
                data[input.attr('name')] = input.is(':checked');
            }else {
                data[input.attr('name')] = input.val();
            }
            // convert data to string and update localStorage object
            localStorage[key] = JSON.stringify(data);
        }
        // function to get data out of local storage
        // returning function maintains chainability
         return this.each(function() {  
            // set variable to current element  
            var element = $(this);
            // check whether browser supports localStorage 
            if(typeof(Storage)!=="undefined"){
                // create key variable that will be used to store data (key/value pair)
                var key = element.attr('name');
                
                // if localStorage already contains a value for key, parse the current value
                // to make it accessible to the HTML page
                var data = false;
                if(localStorage[key]) {
                    data = JSON.parse(localStorage[key]);
                }
                // if there is no value currently set for key, process data using stringify
                // so that it can be added to localStorage
                if(!data) {
                    localStorage[key] = JSON.stringify({});
                    
                    // make data accessible to the html page
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
                                // make sure checkbox is not checked by default
                                input.removeAttr('checked');
                            }
                        } else {
                            // get value of input items that aren't checkbox
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