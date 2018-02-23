var fs = require('fs');
var thisID;
var thisTitle;
var thisContent;
var obj;

// what should we do when we press next
function nextClick() {
	readNextID();
	thisTitle = "Dream";
	thisContent = "Test";
	console.log("This id is:" + thisID);
	console.log("This id is:" + thisTitle);
	console.log("This id is:" + thisContent);
    writeToCache();
    //console.log("Write to cache, yes!");
    //jumpToCreat2();
}

function readNextID() {
	var ObjectId = JSON.parse(fs.readFileSync('getid.json').toString());
    console.log(ObjectId);
    thisID = ObjectId.nextId;
}

function writeToCache() {
    var towrite = {"id": thisID, "title": thisTitle, "summary": thisContent};
    fs.writeFile('cache.json', JSON.stringify(towrite));
}

nextClick();
