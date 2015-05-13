/* Got help from the following tutorial: http://www.lynda.com/Developer-Databases-tutorials/Validating-Processing-Forms-JavaScript-PHP/120466-2.html?srchtrk=index:1%0Alinktypeid:2%0Aq:javascript%0Apage:1%0As:relevance%0Asa:true%0Aproducttypeid:2 */
var inputFields = document.donateForm.getElementsByTagName('input');

$( document ).ready(function() {

	// get form elements needed to validate form
	document.getElementById('donateForm');	
	var firstname = document.getElementById('firstname');
	var fVal = document.getElementById('firstname').value;

	var lastname = document.getElementById('lastname');
	var lVal = document.getElementById('lastname').value;
	
	var email = document.getElementById('email');
	var eVal = email.value;
	var phone = document.getElementById('phone');
	var hint = document.getElementById('hint');

	var nameReg = /^[a-zA-Z]{2,20}$/; // checks for alpha characters, min 2, max 20; got help from regexr.com


// validate firstname
// when user leaves firstname field empty, offer hint
firstname.onblur = function() {
	
	if (fVal === "") { 
		hint.innerHTML = "First name is required";
	}
}
// compare input to nameReg, offer hint to direct format of input
firstname.onchange = function() {

	var isValid = this.value.search(nameReg) >= 0; //check that pattern exists within string

	if (!(isValid)) {
		hint.innerHTML = "First name must be 2-20 alphabetical characters";
	}
	else {
		hint.innerHTML ='';
	}
	}
	
// when user leaves lastname field empty, offer hint
lastname.onblur = function() {
	
	if (lVal === "") {
		hint.innerHTML = "Last name is required";
	}
}
// compare input to nameReg, offer hint to direct format of input
lastname.onchange = function() {
	var isValid = this.value.search(nameReg) >= 0; //check that pattern exists within string

	if (!(isValid)) {
		hint.innerHTML = "Last name must be 2-20 alphabetical characters";
	}
	else {
		hint.innerHTML ='';
	}
	}

// validate email
// the fancy regEx here is from this tutorial: https://www.youtube.com/watch?v=UKiy9H_CD0M
/* allows letters, numbers and selected special characters (at least one, can be repeated), requires @ followed by similar string of length 1-10, requires period followed by string of 2-4 alpha characters */

// when user leaves email field empty, offer hint
email.onblur = function() {
	
	if (eVal === "") {
		hint.innerHTML = "Email address is required";
	}
}
// compare input to emailRegex, offer hint to direct format of input
email.onchange = function() {
	var emailRegex = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,10}\.([A-Za-z]){2,4}$/;
	var isValid = this.value.search(emailRegex) >= 0; //check that pattern exists within string

	if (!(isValid)) {
		hint.innerHTML = "Email address must follow this format: username@example.com";
	}
	else {
		hint.innerHTML ='';
	}
	}


// validate phone
// when user leaves phone field empty, offer hint
phone.onblur = function() {
	var pVal = phone.value;
	if (pVal === "") {
		hint.innerHTML = "Phone number is required";
	}
}
// compare input to emailRegex, offer hint to direct format of input
phone.onchange = function() {
    
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
        hint.innerHTML =  "Phone number must be ten digits";
        event.preventDefault;
    }
} //end phone validation

var donateForm = document.getElementById('donateForm');
donateForm.onsubmit = function() {
	hint.innerHTML ='Submission interrupted. Please complete all required fields and try again.';
	return false;
}

}); // end document ready