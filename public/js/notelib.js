var title;
var map;
var marker;
var flag = true;
var Init;
var Pos;
var markerPos;
var getPosObj;
var markerArray = [];
var infoArray = [];

function initMap() {
    //alert("ok");
	Init = {
		lat: 32.878,
		lng: -117.234
	};

    console.log("This enter")
	map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: Init
	});
    
    callthis();
};

// Function that is called when the document is ready.
function callthis() {
	console.log("Javascript connected!");
	$('.thisName').click(nameClick);
    $.get("/getAllObject", getMOFn);
}

// what should we do when we press next
function nameClick(e) {
	e.preventDefault();
    
    title = $(this).text().trim();
    
	console.log("This shareName is:" + title);
    
    $.post("/getMapView", {"title":title}, callbackFn);
}

function callbackFn(res) {
    window.location.href = "/mapViewS";
}

function getMOFn(res){
    var oneLat;
    var oneLng;
    var oneTitle;
    var onePos;
    markerArray = [];
    
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