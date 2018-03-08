var map;
var marker;
var flag = true;
var Init;
var Pos;
var markerPos;
var getPosObj;
var markerArray = [];
var infoArray = [];

// Call this function when the page loads (the "ready" event)
/* $(document).ready(function () {
	initializePage();
}) */

// Function that is called when the document is ready.
function initializePage() {
	console.log("Javascript connected!");
    
    $.get("/getSingleObject", getSOFn);
};

function initMap() {
	Init = {
		lat: 32.878,
		lng: -117.234
	};

	map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: Init
	});
    
    initializePage();
};

function getSOFn(res) {
    var sLat = res.lat;
    var sLng = res.lng;
    
    console.log("The lat is: " + sLat);
    console.log("The lng is: " + sLng);
    
    Pos = new google.maps.LatLng(sLat, sLng);
    
    marker = new google.maps.Marker({
	    position: Pos,
		map: map,
		draggable: false
	});
    
    infoWindow = new google.maps.InfoWindow;
    infoWindow.setPosition(Pos);
	infoWindow.setContent('Note Location');
	infoWindow.open(map);
    map.setCenter(Pos);
};