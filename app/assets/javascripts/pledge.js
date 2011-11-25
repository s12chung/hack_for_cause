$(document).ready(function() {

    $("#pledge-submit").click(function(e) {
        // basic checks
        var email = $("#pledge_email").val();
        if (!email || email=="") {
            alert ("Email blank");
            e.preventDefault();
            return;
        }
        var name = $("#pledge_full_name").val();
        if (!name || name=="") {
            alert ("Name blank");
            e.preventDefault();
            return;
        }

        var amount =  parseFloat($("#pledge_amount").val());
        if (!amount || amount<=0) {
            alert ("Invalid amount entered.");
            e.preventDefault();
            return;
        }

        var time = new Date().getTime();
        $("#pledge_time").val(time);
        $('#pledge-submit').hide();
        $('#loader').show();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var apiStruct = {
                    "campaign": $("#pledge_campaign_id").val(),
                    "latlng": latlng.toString(),
                    "amount": $("#pledge_amount").val(),
                    "time": time
                };

                $.ajax({
                    type: "GET",
                    url: "http://hubba-demo.elasticbeanstalk.com/dashboard/api/pledge/push",

                    data: apiStruct,
                    contentType: 'application/javascript',
                    dataType: 'jsonp',

                    success: function() {
                        $("#new_pledge").submit();

                        $("#pledge_amount").val("");
                        $("#pledge_email").val("");
                        $("#pledge_full_name").val("");

                        $('#pledge-submit').show();

                        $('#loader').hide();
                        alert('Thank for your pledge.');
                    },
                    error: function() {
                        alert("Error sending pledge.");
                        $("#new_pledge").submit();

                        $("#pledge_amount").val("");
                        $("#pledge_email").val("");
                        $("#pledge_full_name").val("");

                        $('#pledge-submit').show();

                        $('#loader').hide();
                    }
                });
            }/*, error*/);
         }

        e.preventDefault();

    });
});