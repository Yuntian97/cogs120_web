'use strict';
var thisID = 0;
var thisTitle;
var thisContent;
var obj;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
	console.log("Javascript connected!");
	$('.pageEnd #2').click(nextClick);
}

// what should we do when we press next
function nextClick(e) {
	e.preventDefault();
    
	thisTitle = document.getElementById('titleBar').value;
	thisContent = $('.Textbox #goodBox').val();
    
	console.log("This id is:" + thisId);
	console.log("This id is:" + thisTitle);
	console.log("This id is:" + thisContent);
    
    $.post("/addtocache", {"title":thisTitle, "content":thisContent}, pjCallBackFn);
}

function readNextID() {
	var ObjectId = JSON.parse(fs.readFileSync('../getid.json').toString());
    console.log(ObjectId);
    thisID = ObjectId.nextId;
}

function writeToCache() {
    var towrite = {"id": thisID, "title": thisTitle, "summary": thisContent};
    fs.writeFile('../cache.json', JSON.stringify(towrite));
}

function pjCallBackFn(response){
    console.log("Write to cache, yes!");
    window.location.href = "/creat2";
}
