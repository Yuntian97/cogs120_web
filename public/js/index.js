var shareName;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
	console.log("Javascript connected!");
    $('.functionText #1').click(toLib);
}

// what should we do when we press next
function toLib(e) {
	e.preventDefault();
    //var random_boolean = Math.random() >= 0.5;
    
    //if (random_boolean){
    window.location.href = "/notelib";
    //}
    //else{
    //window.location.href = "/mapViewAB";
    //}
}