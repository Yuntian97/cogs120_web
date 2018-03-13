var map;
var marker;
var flag = true;
var Init;
var markerPos;
var getPosObj;
var infoWindow;

// Call this function when the page loads (the "ready" event)
/* $(document).ready(function () {
	initializePage();
}) */

// Function that is called when the document is ready.
function initializePage() {
	console.log("Javascript connected!");
	$('.pageEnd #2').click(nextClick);
}

function nextClick(e) {
	e.preventDefault();
    
    if (marker == undefined){
        marker = new google.maps.Marker({
            position: Init,
			map: map,
			draggable: true,
			title: "Drag Me To Your Location"
        });
        
        infoWindow.setPosition(Init);
        infoWindow.setContent('Location, drag Marker To Your Location');
        infoWindow.open(map);
        map.setCenter(Init);
    }
    
    getPosObj = marker.getPosition();
    var thisLat = getPosObj.lat();
    var thisLng = getPosObj.lng();
    
	console.log("This id is:" + thisLat);
	console.log("This id is:" + thisLng);
    
    $.post("/postocache", {"lat":thisLat, "lng":thisLng}, pjCallBackFn);
}

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
        console.log("Get Location!");
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
            console.log("Get Marker!");
			marker = new google.maps.Marker({
				position: pos,
				map: map,
				draggable: true,
				title: "Drag Me To Your Location"
			});
            //console.log(pos);
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
    
    initializePage();
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

function pjCallBackFn(response){
    console.log("Write to cache, yes!");
    window.location.href = "/creat3";
}
