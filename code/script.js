$(function () {
	var div = $("#dynamicheight");
	var width = div.width();

	div.css("height", width);
});

document.getElementsByClassName("active").disabled = true;

var date = new Date();
var month = ""
switch (date.getMonth() + 1)
{
	case 1:
		month = "jan";
		break;
	case 2:
		month = "feb";
		break;
	case 3:
		month = "mar";
		break;
	case 4:
		month = "apr";
		break;
	case 5:
		month = "may";
		break;
	case 6:
		month = "jun";
		break;
	case 7:
		month = "jul";
		break;
	case 8:
		month = "aug";
		break;
	case 9:
		month = "sep";
		break;
	case 10:
		month = "oct";
		break;
	case 11:
		month = "nov";
		break;
	case 12:
		month = "dec";
		break;
	default:
		break;
}
document.getElementById("time").innerHTML = date.getDate() + " "
	month + " "
	date.getFullYear() + " @ " +
	date.getHours() + ":" +
	date.getMinutes();
