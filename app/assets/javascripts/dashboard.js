$(document).ready(function() {
    var startingNum = 0;
    var num = $("#countNum");
    setInterval(function() {
        startingNum+=Math.floor(Math.random()*10);
        var string = startingNum.toString();
        var i;
        for(i=0; i< string.length -1; i++) {
            string.charAt(i);
        }

        num.html(startingNum);
    }, 2000);
});