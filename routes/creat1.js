
var fs = require('fs');


exports.creat1page = function(req, res) {
    res.render('creat1');
};

exports.addtocache = function(req, res) {
    //console.log("Reach the server side!");
    var ObjectId = JSON.parse(fs.readFileSync('../getid.json').toString());
    var writeID = ObjectId.nextId;
    //console.log("Let me see the req:" + req);
    
    var writeTitle = req.title;
    var writeContent = req.content;
    
	//console.log("This id is:" + writeID);
	//console.log("This Title is:" + writeTitle);
	//console.log("This id is:" + writeContent);
    
    var towrite = {"id": writeID, "title": writeTitle, "summary": writeContent};
    fs.writeFile('../cache.json', JSON.stringify(towrite));
};