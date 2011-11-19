$(document).ready(function() {
    var startingNum = 0;
    var num = $("#countNum");
    setInterval(function() {
        startingNum+=Math.floor(Math.random()*10);
        num.html(startingNum);
    }, 2000);
});