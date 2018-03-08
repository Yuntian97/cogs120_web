'use strict';
var thisTitle = "";
var thisContent = "";
var obj;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
	console.log("Javascript connected!");
    
    var thisUrl = window.location.href;
    
    console.log("Url is: " + thisUrl);
    
    if (thisUrl.includes("val")){
       $.get("/getPreviousVal", getValFn);
       //document.getElementById('titleBar').value = 
    }
    
	$('.pageEnd #2').click(nextClick);
}

// what should we do when we press next
function nextClick(e) {
	e.preventDefault();
    
	thisTitle = document.getElementById('titleBar').value;
	thisContent = $('.Textbox #goodBox').val();
    
	console.log("This Title is:" + thisTitle);
	console.log("This Content is:" + thisContent);
    
    /*
    var data = [];
    var noteObj = {};
    
    noteObj["title"] = thisTitle;
    noteObj["content"] = thisContent;
    
    data.push(noteObj);
    console.log("This data is:" + data); */
    
    $.post("/addtocache", {"title":thisTitle, "content":thisContent}, pjCallBackFn);
}

function pjCallBackFn(response){
    console.log("Write to cache, yes!");
    window.location.href = "/creat2";
}

function getValFn(res){
    console.log("back to page, get data?");
    
    console.log("This Title is:" + res.title);
	console.log("This Content is:" + res.content);
    
    document.getElementById('titleBar').value = res.title;
    document.getElementById('goodBox').value = res.content;
}
