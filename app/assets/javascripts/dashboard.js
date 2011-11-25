$(document).ready(function() {
    var number_container = document.getElementById('number_container');

    var campaign = $("#pledge_campaign_id").val();
    if (!campaign || campaign<=0) campaign = 1;

    setInterval(function() {
        var apiStruct = {
             "campaign":campaign
        };

        $.ajax({
            type: "GET",
            url:"http://hubba-demo.elasticbeanstalk.com/dashboard/api/pledge/get",
            data: apiStruct,
            contentType:"application/javascript",
            dataType:"jsonp",
            success: function(ret) {
                num = ret;
                var string = num?num.toString():"0";
                number_container.innerHTML = '';
                for(var i=0; i< string.length; i++) {
                    var number = document.createElement('div');
                    number.className = "number";
                    number.innerHTML = string.charAt(i);
                    number_container.appendChild(number);
                }
            },
            error: function() {
            }
        });
    }, 3000);
});