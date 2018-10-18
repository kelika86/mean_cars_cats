// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();
app.set('views', __dirname + '/views'); 
// use app's get method and pass it the base route '/' and a callback
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.get('/cats', function (request, response) {
    response.render('cats');
})
app.get('/cars', function (request, response) {
    response.render('cars');
})
app.get('/create/new', function (request, response) {
    response.render('form');
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})