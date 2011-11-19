$(document).ready(function() {
    $("#pledge-submit").click(function(e) {
        var time = new Date().getTime();
        $("#pledge_time").val(time);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


                var apiStruct = {
                    "name": $("#pledge_charity_name").val(),
                    "latlng": latlng.toString(),
                    "amount": $("#pledge_amount").val(),
                    "time": time
                };

                //var apiJSON = $.toJSON(apiStruct);
                $.ajax({
                    type: "GET",
                    url: "http://ec2-50-19-174-218.compute-1.amazonaws.com/dashboard/api/pledge/push",
                    data: apiStruct,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function() {
                        $("#new_pledge").submit();
                    },
                    error: function() {
                        $("#new_pledge").submit();

                    }
                });
            }/*, error*/);
        }

        e.preventDefault();
    });
});