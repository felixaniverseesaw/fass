// Appends zeroes to single-digit values so that they remain consistent with the date format.
function appendLeadingZeroes(n) {
	return n <= 9 ? "0" + n : n;
}

// Initialises Date object for display.
let currentDate = new Date();

// Formats the Date object using the apppendLeadingZeroes function.
let dateFormat =
	appendLeadingZeroes(currentDate.getDate()) +
	"/" +
	appendLeadingZeroes(currentDate.getMonth() + 1) +
	"/" +
	currentDate.getFullYear() +
	" @ " +
	appendLeadingZeroes(currentDate.getHours()) +
	":" +
	appendLeadingZeroes(currentDate.getMinutes()) +
	":" +
	appendLeadingZeroes(currentDate.getSeconds());

// Displays the formatted Date object in the <p></p> object with id "time".
document.getElementById("time").innerHTML = "last updated: " + dateFormat;
