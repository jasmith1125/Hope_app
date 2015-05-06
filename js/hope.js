/* hope.js */
$(document).ready(function () {
	function init() {
	var input_name = '';
		init() {
		$.each( $(‘form input’), function() {
		input_name = $(this).attr(‘name’);
		if (localStorage[input_name]) {
		$(this).val(localStorage[input_name]);
	}
}
});

'use strict';


// Got help from: http://stackoverflow.com/questions/13330202/how-to-create-list-of-checkboxes-dynamically-
// with-javascript
/*
function populate(select1, select2) {
	var s1 = document.getElementById(select1);
	var s2 = document.getElementById(select2);
	s2.innerHTML = "";

	if (s1.value == "kitchen") {
		var optionArray = ['table/chairs', 'microwave oven', 'flatware', 'dishes', 'pots/pans', 'can opener', 'bakeware', 'mixing bowls', 'cutting boards', 'kitchen knives', 'kitchen towels', 'dish cloths', 'pot holders', 'dish drainers', 'dish soap', 'foil/food storage bags'];
     } else if (s1.value == "bed") {
     	var optionArray = ['twin bed frame', 'full bed frame', 'twin mattress/box spring', 'full mattress/box spring', 'dresser', 'end table', 'alarm clock', 'lamp', 'wastebasket'];
     } else if (s1.value == "linens") {
     	var optionArray = ['twin sheet set', 'full sheet set', 'twin mattress cover', 'full mattress cover', 'bed pillows', 'blankets', 'rugs', 'laundry baskets' ];
	 } else if (s1.value == "bath") {
	 	var optionArray = ['shower curtains', 'bath towels', 'wash cloths', 'hand towels', 'rugs', 'wastebaskets'];
	 } else if (s1.value = "living") {
	 	var optionArray = ['sofa', 'chair', 'end table', 'coffee table', 'lamps', 'rugs'];
	 } else if (s1.value = "personal") {
	 	var optionArray = ['deodorant', 'razors', 'bar/liquid soap', 'hair clips', 'hair brushes', 'tampons/sanitary pads', 'toilet tissue', 'hair shampoo', 'hair conditioner', 'hand/body lotion'];
	 } else if (s1.value = "household") {
	 	var optionArray = ['Tylenol', 'paper towels', 'cough syrup', 'band-aids', 'laundry soap', 'bleach', 'all-purpose cleaner', 'scouring powder', 'window cleaner', 'garbage bags', 'sponges'];
	 } else if (s1.value = "baby") {
	 	var optionArray = ['bassinet', 'crib', 'crib sheets', 'crib mattress pad', 'baby blankets', 'car seat', 'baby wipes', 'diapers', 'pull-ups', 'thermometer'];
	 }

	 for (var option in optionArray) {
	 	if (optionArray.hasOwnProperty(option)) {
	 		var pair = optionArray[option];
	 		var checkbox = document.createElement('input');
	 		checkbox.type = 'checkbox';
	 		checkbox.name = pair;
	 		checkbox.value = pair;
	 		s2.appendChild(checkbox);

	 		var label = document.createElement('label')
	 		label.htmlFor = pair;
	 		label.appendChild(document.createTextNode(pair));

	 		s2.appendChild(label);
	 		s2.appendChild(document.createElement('br'));
	 	}
	 }
} // end populate

$(document).on('change', 'input[type=checkbox]', function(e) {
    alert(s2.value);
});
*/

// Function called when the first menu's value changes.
// Function updates the second menu.
// Create array of pet arrays; array index of each nested array
// corresponds to index of the array elements in primaryMenu (html)
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

// Gather form data and put in local storage
// Create an array to hold all of the square objects
var data = [];

// Create a constructor function that enables creation of Datum object
var Datum = function(firstname, lastname, email, phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
}

// Create a function that writes Datum to html page
function writeToPage(someData) {
	var myOutput = document.getElementById("output");
	var div = document.getElementById('donations');

		var firstnameNode = document.createTextNode(someData.firstname);
		var span = document.createElement("span"); // create a new span tag
		span.appendChild(firstnameNode); // add the text node to the span
		div.appendChild(span);

		var lastnameNode = document.createTextNode(someData.lastname);
		var span = document.createElement("span");
		span.appendChild(lastnameNode);
		div.appendChild(span);

		var email = document.createTextNode(someData.email);
		var span = document.createElement("span"); // create a new span tag
		span.appendChild(emailNode); // add the text node to the span
		div.appendChild(span);


		var phoneNode = document.createTextNode(someData.phone);
		var span = document.createElement("span"); // create a new span tag
		span.appendChild(phoneNode);
		div.appendChild(span);

		// Add form entries to "output" div
		myOutput.appendChild(div);
}

// Create function to gather form input, write to page, add event to array, convert to JSON, add to local storage
function submitData() {
	// Get values
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;

	// Write the data object to the page
	var myData = new Datum(firstname, lastname, email, phone);
	writeToPage(myData);

	// Add event to an array of events
	data.push(myData);

	// Write the array to local storage
	var jsonString = JSON.stringify(data);

	localStorage.setItem("dataStorage", jsonString);

}

window.onload = function() {
	// Assign an onclick handler to the "save" button
	document.getElementById("submitBtn").onclick = submitData;

	// Get all data from local storage and store in the global array
	var jsonString = localStorage.getItem("dataStorage");
	if (jsonString) {
		events = JSON.parse(jsonString);
	}

	 // Write the event objects to the page
	 for (var i = 0; i < data.length; i++) {
	 	writeToPage(data[i]);
	 }
}

 // Clear form field inputs after submit; from WC3: http://www.w3schools.com/jsref/met_form_reset.asp
	document.getElementById("contact").reset();




} // end (document).ready