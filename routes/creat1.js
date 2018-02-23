
var fs = require('fs');
var thisID;
var thisTitle;
var thisContent;
var obj;

exports.creat1page = function(req, res) {
    res.render('creat1');
};

// what should we do when we press next
function nextClick () {
    var ObjectId = JSON.parse(fs.readFileSync('../getid.json').toString());
    console.log(ObjectId);
    thisID = ObjectId.nextId;
    
	thisTitle = document.getElementById('titleBar').value;
	thisContent = $('.Textbox #goodBox').val();
    
	console.log("This id is:" + thisId);
	console.log("This id is:" + thisTitle);
	console.log("This id is:" + thisContent);
    
    var towrite = {"id": thisID, "title": thisTitle, "summary": thisContent};
    fs.writeFile('../cache.json', JSON.stringify(towrite));
    
    console.log("Write to cache, yes!");
    window.location.href = "/creat2";
}