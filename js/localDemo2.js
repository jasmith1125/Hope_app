// This code is based on a demo Mike did on 3/30: https://canvas.harvard.edu/courses/1847/conferences

// Create an array to hold all of the square objects
var events = [];

// Create a constructor function that enables creation of Event object
var Event = function(eventDescription, eventDate, who, notes) {
    this.eventDescription = eventDescription;
    this.eventDate = eventDate;
    this.who = who;
    this.notes = notes;
}

// Create a function that writes Event to html page
function writeToPage(anEvent) {
	var myOutput = document.getElementById("output");

	var div = document.createElement("div");

		var eventDescriptionNode = document.createTextNode(anEvent.eventDescription);
		var span = document.createElement("span"); // create a new span tag
		span.appendChild(eventDescriptionNode); // add the text node to the span
		div.appendChild(span);

		var eventDateNode = document.createTextNode(anEvent.eventDate);
		var span = document.createElement("span");
		span.appendChild(eventDateNode);
		div.appendChild(span);

		var whoNode = document.createTextNode(anEvent.who);
		var span = document.createElement("span"); // create a new span tag
		span.appendChild(whoNode); // add the text node to the span
		div.appendChild(span);


		var notesNode = document.createTextNode(anEvent.notes);
		var span = document.createElement("span"); // create a new span tag
		span.appendChild(notesNode);
		div.appendChild(span);

		// Add form entries to "output" div
		myOutput.appendChild(div);
}

// Create function to gather form input, write to page, add event to array, convert to JSON, add to local storage
function submitEvent() {
	// Get values
	var eventDescription = document.getElementById("eventDescription").value;
	var eventDate = document.getElementById("eventDate").value;
	var who = document.getElementById("who").value;
	var notes = document.getElementById("notes").value;

	// Write the event object to teh page
	var myEvent = new Event(eventDescription, eventDate, who, notes);
	writeToPage(myEvent);

	// Add event to an array of events
	events.push(myEvent);

	// Write the array to local storage
	var jsonString = JSON.stringify(events);

	localStorage.setItem("eventStorage", jsonString);

}

window.onload = function() {
	// Assign an onclick handler to the "save" button
	document.getElementById("saveBtn").onclick = submitEvent;

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
	document.getElementById("eventForm").reset();

