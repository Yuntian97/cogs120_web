var map;
var marker;
var flag = true;
var Init;
var markerPos;

function initMap() {
	Init = {
		lat: 32.878,
		lng: -117.234
	};

	map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: Init
		});

	infoWindow = new google.maps.InfoWindow;

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			marker = new google.maps.Marker({
				position: pos,
				map: map,
				draggable: true,
				title: "Drag Me To Your Location"
			});

			infoWindow.setPosition(pos);
			infoWindow.setContent('Current Location, drag Marker To Your Location');
			infoWindow.open(map);
			map.setCenter(pos);
		}, function () {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	marker = new google.maps.Marker({
	    position: Init,
		map: map,
		draggable: true,
		title: "Drag Me To Your Location"
	});
    
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Geolocation service failed, drag Marker To Your Location' :
		'Browser doesn\'t support geolocation, drag Marker To Your Location');
	infoWindow.open(map);
}
