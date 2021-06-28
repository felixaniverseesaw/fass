$(function() {
    var div = $('#dynamicheight');
    var width = div.width();
    
    div.css('height', width);
});

document.getElementsByClassName("active").disabled = true;

var currentdate = new Date(); 
document.getElementById("time").innerHTML = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();;


