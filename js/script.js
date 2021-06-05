// form validation
function validateForm() {
	var fname = document.forms["feedback"]["fname"].value;
	var lname = document.forms["feedback"]["lname"].value;
	var email = document.forms["feedback"]["email"].value;
	var gender = document.forms["feedback"]["gender"].value;
	var comment = document.forms["feedback"]["comment"].value;

	if (fname == "" || lname == "" || email == "" || comment == ""){
		alert("Please fill all fields before submitting");
	}
	else{
		alert("Your valuable feedback has been recorded");
	}
}


// for sliding hamburger menu on click
function slideMenu(){
	var x = document.getElementById("navlinks");
	
	// if sliding navbar is out of screen, button press displays it
	if (x.style.transform == "translateX(100%)"){

		x.style.transform = "translateX(0%)";
	}
	// id sliding navbar is in the screen, button press hides it
	else{
		x.style.transform = "translateX(100%)";
	}
}