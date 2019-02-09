var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require ('method-override');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
     extended: false
}))

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ 
    defaultLayout: 'main' 
}));
app.set('view engine', 'handlebars');

var PORT = 3000;

// // Import routes and give the server access to them.
var routes = require('./controllers/routes.js');
app.use('/',routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});