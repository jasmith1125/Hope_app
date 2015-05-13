console.clear();

// User Object Constructor
function User(userTitle, firstName, lastName, contactTypeEmail, contactTypePhone, contactInfo, contactMe) {
    this.userTitle = userTitle;
    this.firstName = firstName;
    this.lastName = lastName;
    this.contactTypeEmail = contactTypeEmail;
    this.contactTypePhone = contactTypePhone;
    this.contactInfo = contactInfo;
    this.contactMe = contactMe;
}
User.prototype.addUser = function(users) {
    users.push(this);
}

// Save User Object to local storage before unloading window
function persistDataBeforeUnloading(users) {
    if (users.length > 0) {
        // clear exsiting items in local storage
        window.localStorage.removeItem('myUsers');
        window.localStorage.setItem('myUsers', JSON.stringify(users));
    }
}

// Get persisted User Object from local storage
function loadData(users) {
    // check for users in local storage
    var data = window.localStorage.getItem('myUsers');
    if (data != undefined) {
        data = JSON.parse(data);
        // load users from local storage into Array (as objects)
        data.forEach(function(u) {
            var user = new User(u.userTitle, u.firstName, u.lastName,
                                u.contactTypeEmail, u.contactTypePhone,
                                u.contactInfo, u.contactMe)
            users.push(user);
        });
    }
    console.log(users.length + " user(s) loaded.");
}

// main processing
window.onload = function() {
    var users = [];

    var theForm = document.getElementById('theForm');
    var submitBtn = document.getElementById('submitBtn');
    var userTitle = document.getElementById('userTitle');
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var contactTypeEmail = document.getElementById('contactTypeEmail');
    var contactTypePhone = document.getElementById('contactTypePhone');
    var contactInfo = document.getElementById('contactInfo');
    var contactMe = document.getElementById('contactMe');
    
    // ensure all fields are populated
    function haveAllData() {
        var success = false;
        if (userTitle.options[userTitle.selectedIndex].value == "") {
            alert('Select a Title.');
            userTitle.focus();
        } else if (firstName.value == "" || lastName.value == "") {
            if (firstName.value == "") {
                alert('Enter a first name.');
                firstName.focus();
            } else {
                alert('Enter a last name.');
                lastName.focus();
            }
        } else if (contactInfo.value == "") {
                alert('Enter contact info.');
                contactInfo.focus();
        } else {
            success = true;
        }
        return success;
    }

    // listen for form submit
    theForm.addEventListener('submit', function(evt) {
        if (haveAllData()) {
            // create new User Object
            var user = new User(userTitle.options[userTitle.selectedIndex].value,
                                firstName.value, lastName.value,
                                contactTypeEmail.checked, contactTypePhone.checked,
                                contactInfo.value, contactMe.checked);
            // clear the current user, if loaded from local storage
            users = [];
            // add User Object to Array
            user.addUser(users);
            // clear the form
            theForm.reset();
            console.log('User created:');
            console.log(users);
        }
        // stop submit
        evt.preventDefault();
    });

    // listen for window's unload event
    window.onbeforeunload = function() {      
        persistDataBeforeUnloading(users);
    }

    // load data from local storage
    loadData(users);
    // if we have a user, populate the form
    if (users.length == 1) {
        // since we're only storing 1 user, just grab it
        var user = users[0];
        var theTitle = user.userTitle;

        // populate form values from local storage
        var len = userTitle.length;
        for (var i = 0; i < len; i++) {
            var val = userTitle.options[i].value;
            if (val == theTitle) {
                userTitle.options[i].selected = true;
                break;
            }
        }
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        contactTypeEmail.checked = user.contactTypeEmail;
        contactTypePhone.checked = user.contactTypePhone;
        contactInfo.value = user.contactInfo;
        contactMe.checked = user.contactMe;
    }
}