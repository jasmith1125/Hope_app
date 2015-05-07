/* CSCI E-3, unit 2B
Author: Joyce Smith */

// This code is based on a demo Mike did on 3/30: https://canvas.harvard.edu/courses/1847/conferences

// Create an array to hold all of the square objects
var events = [];

// Create a constructor function that enables creation of Event object
var Event = function(table, dishes, pots, mic, bowls, cloths, knives, wash, foil, flat, sofa, living, end, coffee, lamp, area, frame, mattress, dresser, pillow, sheet, pad, curtain, towel, bath, waste, bass, crib, cribsheet, diaper, baby, seat, stroll, bo, razors, temp, soap, hair, tampon, toilet, cough, paper, laundry, cleaner, trash, broom, car, washer, dryer, tv, stove, fridge, carpet, floor) {
    this.table = table;
    this.dishes = dishes;
    this.pots = pots;
    this.mic = mic;
    this.bowls = bowls;
    this.cloths = cloths;
    this.knives = knives;
    this.wash = wash;
    this.foil = foil;
    this.flat = flat;
    this.sofa = sofa;
    this.living = living;
    this.end = end;

    
}

// Create a function that writes Event to html page
function writeToPage(anEvent) {
	var myOutput = document.getElementById("donations");

	var div = document.createElement("div");

		var tableNode = document.createTextNode(anEvent.table);
		var li = document.createElement("li"); // create a new li tag
		li.appendChild(tableNode); // add the text node to the li
		div.appendChild(li);

		var dishesNode = document.createTextNode(anEvent.dishes);
		var li = document.createElement("li");
		li.appendChild(dishesNode);
		div.appendChild(li);

		var potsNode = document.createTextNode(anEvent.pots);
		var li = document.createElement("li"); // create a new li tag
		li.appendChild(potsNode); // add the text node to the li
		div.appendChild(li);


		var micNode = document.createTextNode(anEvent.mic);
		var li = document.createElement("li"); // create a new li tag
		li.appendChild(micNode);
		div.appendChild(li);

		

		// Add form entries to "output" div
		myOutput.appendChild(div);
}

// Create function to gather form input, write to page, add event to array, convert to JSON, add to local storage
function submitEvent() {
	// Get values
	var table = document.getElementById("table").value;
	var dishes = document.getElementById("dishes").value;
	var pots = document.getElementById("pots").value;
	var mic = document.getElementById("mic").value;
	

	// Write the event object to teh page
	var myEvent = new Event(table, dishes, pots, mic);
	writeToPage(myEvent);

	// Add event to an array of events
	events.push(myEvent);

	// Write the array to local storage
	var jsonString = JSON.stringify(events);

	localStorage.setItem("eventStorage", jsonString);

}

window.onload = function() {
	// Assign an onclick handler to the "save" button
	document.getElementById("submitBtn").onclick = submitEvent;

	// Get all events from local storage and store in the global array
	var jsonString = localStorage.getItem("eventStorage");
	if (jsonString) {
		events = JSON.parse(jsonString);
	}

	 // Write the event objects to the page
	 for (var i = 0; i < events.length; i++) {
	 	writeToPage(events[i]);
	 }
	 
}

 // Clear form field inputs after submit; from WC3: http://www.w3schools.com/jsref/met_form_reset.asp
	//document.getElementById("contact").reset();



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

