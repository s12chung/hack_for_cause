$(document).ready(function() {
    var startingNum = 0;
    var number_container = document.getElementById('number_container');

    setInterval(function() {
        number_container.innerHTML = '';

//        startingNum += Math.floor(Math.random()*10);
//
//        var string = startingNum.toString();
//        var i;
//        for(i=0; i< string.length -1; i++) {
//            var number = document.createElement('div');
//            number.className = "number";
//            number.innerHTML = string.charAt(i);
//            number_container.appendChild(number);
//        }
    }, 2000);
});