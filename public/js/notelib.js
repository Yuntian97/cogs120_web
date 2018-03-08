var title;
// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
    $('.pageEnd #3').click(likeClick);
	console.log("Javascript connected!");
	$('.thisName').click(nameClick);
    
}

// what should we do when we press next
function nameClick(e) {
	e.preventDefault();
    
    title = $(this).text().trim();
    
	console.log("This shareName is:" + title);
    
    $.post("/getMapView", {"title":title}, callbackFn);
}

function likeClick(e){
    e.preventDefault();
    
	console.log("Like! click");
    
    ga("send", "event", "like", "click");
}

function callbackFn(res) {
    window.location.href = "/mapViewS";
}