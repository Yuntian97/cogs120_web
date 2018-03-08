
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
//var project = require('./routes/project');
var create = require('./routes/create');
//var creat2 = require('./routes/creat2');
//var creat3 = require('./routes/creat3');
//var notelib = require('./routes/notelib');
//var friend = require('./routes/friend');
var help = require('./routes/help');
var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/creat1', create.creat1page);
app.get('/creat1val', create.creat1page);
app.get('/creat2', create.creat2page);
app.get('/creat3', create.creat3page);
app.get('/notelib', create.notelibpage);
app.get('/friend', create.friendpage);
app.get('/help', help.helppage);
app.get('/login', login.loginpage);
app.get("/mapViewS", create.mapViewS);
app.post("/addtocache", create.addtocache);
app.post("/postocache", create.postocache);
app.get("/getPreviousVal", create.previousVal);
app.get("/getSingleObject", create.retOneObj);
app.get("/mapViewAB", create.mapViewAB);
app.get("/getAllObject", create.retAllObj);
app.post("/finalStep", create.finalstep);
app.post("/getMapView", create.getMapView);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
