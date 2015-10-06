var express     = require('express'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/blogs_db');

var app = express();

// config of middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// view routing
app.get('/', function(req,res){
  res.sendFile(__dirname + '/client/index.html');
});

// api routing
var BlogsController = require('./server/controllers/blog')
app.use('/api/blogs', BlogsController);

// start the app
app.listen('8080', function(){
  console.log('...listening');
});
