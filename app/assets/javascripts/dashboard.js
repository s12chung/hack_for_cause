$(document).ready(function() {
    var startingNum = 0;
    var num = $("#countNum");
    setInterval(function() {
        startingNum+=Math.floor(Math.random()*10);
        var string = startingNum.toString();
        for(i=0; i< string.length; i++) {
            
        }

        num.html(startingNum);
    }, 2000);
});