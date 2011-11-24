$(document).ready(function() {
    var imageURL = new google.maps.MarkerImage("http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png");
	
    function AddPin(i, myMap)
    {
        //console.log(i);
        var myLatlng = new google.maps.LatLng(i[0],i[1]);
        var marker2 = new google.maps.Marker({
            position: myLatlng,
            icon:imageURL,
            map: myMap,
            title:"You are here!"
        });
    }

    function success(position) {
        var s = document.querySelector('#status');

        if (s.className == 'success') {
            // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back
            return;
        }

        s.innerHTML = "found you!";
        s.className = 'success';

        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '100%';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		
		var apiStruct = {
            "name": $("#pledge_charity_name").val(),
            "latlng": latlng.toString(),
        };
		jQuery.support.cors = true;
		$.ajax({
			type: "GET",
			url: "http://hubba-demo.elasticbeanstalk.com/dashboard/api/pledge/locations",
			data: apiStruct,
			contentType: 'application/json',
			dataType: 'jsonp',
			timeout: 5000,
			callbackParameter: "jsoncallback",
			success: function(otherLocations) {
				for(var i in otherLocations)
				{
					console.log(otherLocations) 
					AddPin(otherLocations[i],map);
				}
			},
			error: function() {
				error('cannot find past donors')
			}
		});

        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            //    title:"You are here!"
        });

        /*var otherLocations=new Array();
        var location1 = new Array();
        location1[0] = 43.70706;
        location1[1] = -79.39890;

        otherLocations[0] = location1;
        otherLocations[1] = new Array(43.70592,-79.40540);
        otherLocations[2] = new Array(43.71504,-79.38858);
        otherLocations[3] = new Array(43.71004,-79.38858);
        otherLocations[4] = new Array(43.71504,-79.38058);

        for(var i in otherLocations)
        {
            AddPin(otherLocations[i],map);
        } */
    }

    function error(msg) {
        var s = document.querySelector('#status');
        s.innerHTML = typeof msg == 'string' ? msg : "failed";
        s.className = 'fail';

        // console.log(arguments);
    }

    /**if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(success, error);
     } else {
     error('not supported');
     }**/
// tabs
    tabs = new Swipe(document.getElementById('tabs'), {
        startSlide: 1,
        callback: function(event,index,elem) {
            setTab(selectors[index]);
			if (index == 0) {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(success, error);
				} else {
					error('not supported')
				}
			}
        }
    }),
        selectors = document.getElementById('tabSelector').children;

    for (var i = 0; i < selectors.length; i++) {
        var elem = selectors[i];
        elem.setAttribute('data-tab', i);
        elem.onclick = function(e) {
            e.preventDefault();
            setTab(this);
            tabs.slide(parseInt(this.getAttribute('data-tab'),10),300);
        }
    }

    function setTab(elem) {
        for (var i = 0; i < selectors.length; i++) {
            selectors[i].className = selectors[i].className.replace('on',' ');
        }
        elem.className += ' on';
    }

    $(document).ready(function(){
        $('.settings, .go-to-pledge').hide();
        $('.go-to-settings').click(function(){
            $(this).hide();
            $('.go-to-pledge').show();
            $('#gallery, #tabSelector').hide();
            $('.settings').show();
			
        });
        $('.go-to-pledge').click(function(){
            $(this).hide();
            $('.go-to-settings').show();
            $('#gallery, #tabSelector').show();
            $('.settings').hide();
        });
    });
});
