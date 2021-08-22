function appendLeadingZeroes(n) {
	return n <= 9 ? "0" + n : n;
}

var currentDate = new Date();
var dateFormat =
	appendLeadingZeroes(currentDate.getDate()) +
	"/" +
	appendLeadingZeroes(currentDate.getMonth() + 1) +
	"/" +
	currentDate.getFullYear();

var timeFormat =
	appendLeadingZeroes(currentDate.getHours()) +
	":" +
	appendLeadingZeroes(currentDate.getMinutes()) +
	":" +
	appendLeadingZeroes(currentDate.getSeconds());

document.getElementById("time").innerHTML =
	"last updated: " + dateFormat + " @ " + timeFormat;
