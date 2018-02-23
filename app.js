
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
//var project = require('./routes/project');
var creat1 = require('./routes/creat1');
var creat2 = require('./routes/creat2');
var creat3 = require('./routes/creat3');
var notelib = require('./routes/notelib');
var friend = require('./routes/friend');
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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/creat1', creat1.creat1page);
app.get('/creat2', creat2.creat2page);
app.get('/creat3', creat3.creat3page);
app.get('/notelib', notelib.notelibShow);
app.get('/friend', friend.friendpage);
app.get('/help', help.helppage);
app.get('/login', login.loginpage);
app.post('/addtocache', creat1.addtocache);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
