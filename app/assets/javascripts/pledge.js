$(document).ready(function() {

    $("#pledge-submit").click(function(e) {

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

                //var apiJSON = $.toJSON(apiStruct);

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

                        alert('Thank for your pledging.');


                    },
                    error: function() {
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