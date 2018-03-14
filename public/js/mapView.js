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
    
    $.get("/getAllObject", getMOFn);
};

function initMap() {
	Init = {
		lat: 32.878,
		lng: -117.234
	};

	map = new google.maps.Map(document.getElementById('thisMap'), {
	    zoom: 13,
	    center: Init
	});
    
    initializePage();
};

function getMOFn(res){
    var oneLat;
    var oneLng;
    var oneTitle;
    var onePos;
    markerArray = [];
    //infoArray = [];
    
    res.notelib.forEach(function(element) {
        oneLat = element.lat;
        oneLng = element.lng;
        oneTitle = element.title;
        
        onePos = new google.maps.LatLng(oneLat, oneLng);
        new google.maps.Marker({
            position: onePos,
            map: map,
            draggable: false});
            
        infoWindow = new google.maps.InfoWindow;
        infoWindow.setPosition(onePos);
        infoWindow.setContent(oneTitle);
        infoWindow.open(map);
    });
};
