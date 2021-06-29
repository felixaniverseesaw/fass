$(function() {
    var div = $('#dynamicheight');
    var width = div.width();
    
    div.css('height', width);
});

document.getElementsByClassName("active").disabled = true;

var d = new Date();
document.getElementById("time").innerHTML = d.getDate() + "/"
                + (d.getMonth()+1)  + "/" 
                + d.getFullYear() + " @ "  
                + d.getHours() + ":"  
                + d.getMinutes() + ":" 
                + d.getSeconds();


