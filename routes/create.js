var friends = require('../friends.json');
var notelibrary = require('../notes.json');
var noteTitle = "";
var noteContent = "";
var noteLat = 0;
var noteLng = 0;


exports.creat1page = function(req, res) {
    res.render('creat1');
};

exports.creat2page = function(req, res) {
    res.render('creat2');
};

exports.creat3page = function(req, res) {
    res.render('creat3', friends);
};

exports.notelibpage = function(req, res) {
    res.render('notelib', notelibrary);
};

exports.friendpage = function(req, res) {
    res.render('friend', friends);
};

exports.mapViewS = function(req, res) {
    res.render('mapViewS');
};

exports.mapViewAB = function(req, res) {
    res.render('mapView');
};

exports.retOneObj = function(req, res) {
    console.log("Reach the server side, send one note geo");
    var objreturn = {"lat": noteLat, "lng": noteLng};
    res.send(objreturn);
};

exports.retAllObj = function(req, res) {
    console.log("Reach the server side, send all note geo");
    res.send(notelibrary);
};

exports.previousVal = function(req, res){
    console.log("Reach the server side, return previous val!");
    
    var objreturn = {"title": noteTitle, "content": noteContent};
    
    console.log("This Title is:" + noteTitle);
	console.log("This content is:" + noteContent);
    
    res.send(objreturn);
};

exports.finalstep = function(req, res){
    console.log("Reach the server side, final step to lib!");
    
    var obj = req.body;
    var noteShare = obj.sharing;
    console.log("This share is:" + noteShare);
    
    var objreturn = {"title": noteTitle, "content": noteContent, "lat": noteLat, "lng": noteLng, "sharing": noteShare};
    //Push to the library
    notelibrary.notelib.push(objreturn);
    
    res.send(objreturn);
};

exports.addtocache = function(req, res) {
    console.log("Reach the server side!");

    var obj = req.body;
    noteTitle = obj.title;
    noteContent = obj.content;

	console.log("This Title is:" + noteTitle);
	console.log("This content is:" + noteContent);
    
    res.send(obj);
};

exports.postocache = function(req, res) {
    console.log("Reach the server side by pos!");

    var obj = req.body;
    noteLat = obj.lat;
    noteLng = obj.lng;

	console.log("This lat is:" + noteLat);
	console.log("This lng is:" + noteLng);
    
    res.send(obj);
};

exports.getMapView = function(req, res){
    var obj = req.body;
    var getTitle = obj.title;
    noteLat = obj.lat;
    noteLng = obj.lng;
    
    notelibrary.notelib.forEach(function(element) {
        if (element.title == getTitle){
            noteLat = element.lat;
            noteLng = element.lng;
        }
    });
    
    var sendObj = {"Lat":noteLat, "Lng":noteLng};
    console.log("Ohhh,look")
    res.send(sendObj);
};