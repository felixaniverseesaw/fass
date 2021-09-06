function appendLeadingZeroes(n) {
	return n <= 9 ? "0" + n : n;
}

let currentDate = new Date();
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

document.getElementById("time").innerHTML = "last updated: " + dateFormat;
