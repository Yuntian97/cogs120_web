var title;
// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
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

function callbackFn(res) {
    window.location.href = "/mapViewS";
}