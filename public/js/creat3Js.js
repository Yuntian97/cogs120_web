var shareName;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
	console.log("Javascript connected!");
	$('.thisName').click(nameClick);
    $('.pageEnd #2').click(nextClick);
}

// what should we do when we press next
function nameClick(e) {
	e.preventDefault();
    
    shareName = $(this).text();
    $('.title_area h4').text("Friend: " + shareName);
    
	console.log("This shareName is:" + shareName);
    
    //$.post("/addtocache", {"title":thisTitle, "content":thisContent}, pjCallBackFn);
}

function nextClick(e) {
    e.preventDefault();
    
    console.log("the shareName is: " + shareName);
    var send = shareName.trim();
    
    $.post("/finalStep", {"sharing": send}, pjCallBackFn);
}

function pjCallBackFn(response){
    window.location.href = "/";
}