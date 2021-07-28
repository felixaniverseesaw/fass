$(function () {
	var div = $("#dynamicheight");
	var width = div.width();

	div.css("height", width);
});

var date = new Date();
document.getElementById("time").innerHTML = date.getDate() + "/" +
	(date.getMonth() + 1) + "/" +
	date.getFullYear() + " @ " +
	date.getHours() + ":" +
	date.getMinutes() + ":" +
	date.getSeconds();
