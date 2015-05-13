$( document ).ready(function() {

	document.getElementById('donateForm');	
	var firstname = document.getElementById('firstname');
	var nameHint1 = document.getElementById('nameHint1');
	var lastname = document.getElementById('lastname');
	var hint = document.getElementById('hint');
	var min = 2;
	var max = 20;

	// validate firstname
	function checkFname() {
		var len = this.value.length;
		if (len < min) {
		    hint.style.display = "block";
        	hint.innerHTML = 'First name is required, 2-20 characters';
		}
		else {
			hint.style.display = "none";
        	lastname.removeAttribute('disabled');
        	lastname.focus();
		}

	}
	
	firstname.onblur = checkFname;
	
	// validate lastname
	function checkLname() {
		var len = this.value.length;
		if (len < min) {
		    hint.style.display = "block";
        	hint.innerHTML = 'Last name is required, 2-20 characters';
        	event.preventDefault;
		}
		else {
			hint.style.display = "none";
        	email.removeAttribute('disabled');
        	email.focus();
		}

	}
 
	lastname.onblur = checkLname;

	// validate email
	// the fancy regEx here is from this tutorial: https://www.youtube.com/watch?v=UKiy9H_CD0M
	function checkEmail(donateForm, email) {
		var myRegex = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,10}\.([A-Za-z]){2,4}$/;
		var email = document.getElementById('email').value;

		if (email == "" || myRegex.test(email) == true) {
			hint.style.display = "none";
		}
		else {
			hint.innerHTML = "Please enter a valid email address";
			event.preventDefault;
		}
	}
		email.onblur = checkEmail; 


	// validate phone
	function reformat() {
    
    // Get the necessary elements and value
    var phone = document.getElementById("phone").value;    
    
    // I was looking for a way to remove non-digits from user input and found
    // this regEx on stackoverflow that globally replaces non-digits ("\D") with empty string.
    // Here is the URL where I found regEx: http://stackoverflow.com/questions/1862130/strip-non-numeric-characters-from-string
    var stripNonDigits = phone.replace(/\D/g,'');
    // If input matches the regEx for xxx-xxx-xxxx
    // replace the input with input formatted as regEx
    // The $1-$2-$3 grabs groups of code based on the regEx   
    // and inserts hyphens in the right places
    if (stripNonDigits.match(/^(\d{3})(\d{3})(\d{4})$/)) {
       document.getElementById("phone").value = stripNonDigits.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
       hint.style.display = "none";
    } else {
        // If input doesn't match regEx, offer hint
        hint.style.display = "block";
        hint.innerHTML =  "Phone number must be ten digits";
        event.preventDefault;
    }
} //end reformat
   
// Call the reformat function when the user releases key
document.getElementById("phone").onkeyup = reformat;
	


}); // end document ready