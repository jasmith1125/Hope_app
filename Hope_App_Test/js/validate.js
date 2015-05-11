$( document ).ready(function() {

	document.getElementById('donateForm');	
	var firstname = document.getElementById('firstname');
	var nameHint1 = document.getElementById('nameHint1');
	var lastname = document.getElementById('lastname');
	var nameHint2 = document.getElementById('nameHint2');
	var min = 2;
	var max = 20;

	function checkFname() {
		var len = this.value.length;
		if (len < min) {
		    nameHint1.style.display = "block";
        	nameHint1.innerHTML = 'First name is required, 2-20 characters';
		}
		else {
			nameHint1.style.display = "none";
        	lastname.removeAttribute('disabled');
        	lastname.focus();
		}

	}
 
	firstname.onblur = checkFname;
	
	


}); // end document ready