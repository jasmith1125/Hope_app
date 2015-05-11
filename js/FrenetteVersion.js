window.onload = function() {

    "use strict";
   
     // get html elements and bind functions to event handlers
    var donateForm = document.getElementById('donateForm');
    donateForm.onsubmit = processData;

    var btnReset = document.getElementById('btnReset');
    btnReset.onclick = resetForm;

    // bind the onbeforeunload event to a function
    // *** persistDataBeforeUnloading function is in persist.js 
    window.onbeforeunload = function() {      
        persistDataBeforeUnloading(contacts);
        persistDataBeforeUnloading(items);
    }
    
    // call loadData() function to populate contacts Array with existing contacts
    // from local storage
    loadData(contacts);
    loadData(items);
}

/*
 * This function is called when the window loads.
 * It performs init such as binding element event handlers to functions for processing.
 */
    // array to hold contacts
    var contacts = [ ];
    
    /*
     * This is the main processing function.
     */
    var processData = function() {
        var firstname = document.getElementById('firstname');
        var lastname = document.getElementById('lastname');
        var phone = document.getElementById('phone');
        var email = document.getElementById('email');

        // check to see if user popualted all fields
        if (validContactData(firstname, lastname, phone, email)) {
            // add contact to contacts array
            
        document.getElementById("donateForm").submit();
        } else {
            alert('Please enter data in all fields.');    
        }

        // don't submit form
        return false;
    }

    /*
     * This function positions the cursor in the firstName field
     * when the clear buttonis clicked.
     */
     /*
    var resetForm = function() {
        messageSpan.innerHTML = '&nbsp;';
        firstName.focus();
    }
    */

/*
 * This function checks to ensure data has been entered in all fields.
 * If any data is missing, the cursor is placed in the appropraite html
 * element for the user to enter data.
 *
 * @param firstName - the firstName input element
 * @param lastName - the lastName input element
 * @param phone - the phone input element
 * @param email - the email input element
 *
 * @return boolean - true is all data has been entered
 */
function validContactData(firstname, lastname, phone, email)  {
    var haveAllData = false;
    
    if (firstname.value == "") {
        firstname.focus();
    } else if (lastname.value == "") {
        lastname.focus();
    } else if (phone.value == "") {
        phone.focus();
    } else if (email.value == "") {
        email.focus();
    } else {
        haveAllData = true;
    }
    
    return haveAllData;
}

        
    /*
 * This function defines a data object for contact information
 */
function contactData(firstname, lastname, phone, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
    this.getContact = function() {
        return this.firstname + ' ' + this.lastname + ' ' + this.phone +  this.email;
    }
}
    
     /*
 * This function defines a data object for checkbox information
 */
function checkboxData(paper, laundry, cleaner, trash, broom) {
    this.paper = paper;
    this.laundry = laundry;
    this.cleaner = cleaner;
    this.trash = trash;
    this.broom = broom;
    this.getData = function() {
        return this.paper + ' ' + this.laundry + ' ' + this.cleaner + ' ' + this.trash + ' ' + this.broom;
    }
}
/*
/* This functions loops through checkboxData Array and calls function
 * to display each item on the page.
 *
 * @param contacts - array containing contacts
 
function displayData(data) {
    var len = data.length;

    // loop through each contact object in the array
    for (var i = 0; i < len; i++) {
        // get the data
        displayData(data[i]);
    }
}
    */
/*
 * This function writes data to localstorage
 *
 * @param contacts - Array containing Contact Objects
 */
function persistDataBeforeUnloading(contacts) {
    if (contacts.length > 0) {
        // clear exsiting items in local storage
        //window.localStorage.removeItem('myContacts');
        window.localStorage.setItem('myContacts', JSON.stringify(contacts));
    }
}
        
/*
 * This function writes data to localstorage
 *
 * @param items - Array containing checkkboxData Objects
 */
function persistDataBeforeUnloading(items) {
    if (items.length > 0) {
        // clear exsiting items in local storage
        //window.localStorage.removeItem('myItems');
        window.localStorage.setItem('myItems', JSON.stringify(items));
    }
}
    
/*
 * This function retrieves contact data from localstorage
 *
 * @param contacts - Array to load Contacts into
*/
function loadData(contacts) {
    // check for contacts in local storage
    var data = window.localStorage.getItem('myContacts');
    if (data != undefined) {
        data = JSON.parse(data);
         // load contacts from local storage into Array (as objects)
        data.forEach(function(contacts) {
            items.push(new contact(c.firstname, c.lastname, c.phone, c.email));
        });
    }

    // call function to display contacts on page
    displayContacts(contacts);
}

/*
 * This function retrieves checkbox data from localstorage
 *
 * @param items - Array to load Items into
 */
function loadData(items) {
    // check for items in local storage
    var data = window.localStorage.getItem('myItems');
    if (data != undefined) {
        data = JSON.parse(data);
        // load contacts from local storage into Array (as objects)
        data.forEach(function(d) {
            items.push(new item(d.paper, d.laundry, d.cleaner, d.trash, d.broom));
        });
    }

    // call function to display contacts on page
    displayItems(items);
}

    
    // call loadData() function to populate contacts Array with existing contacts
    // from local storage
   
console.log(items);
console.log(contacts);

    
} // end window.onload

//localStorage.clear();