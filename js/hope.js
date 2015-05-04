/* hope.js */
window.onload = function() {
'use strict';


// Got help from: http://stackoverflow.com/questions/13330202/how-to-create-list-of-checkboxes-dynamically-
// with-javascript

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



} // end window.onload