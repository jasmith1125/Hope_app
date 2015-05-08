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

$(document).ready(function() {
    $('#submitBtn').click(function() {
        event.preventDefault();
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
               
            }); //end each
            
            $('#donations').html(resultArray);       
    }); //end click
});


// local storage code from :http://elikirk.com/store-form-data-with-html5-localstorage-and-jquery/

