// Package dependenies
 
let express = require("express");
let bodyParser = require("body-parser");

// Configure express. Allow getting port from the bound environment variabele

let app = express();
let PORT = process.env.PORT || 3000;

// Sets up parts of the express app that will be used, including static directory

app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
 
// Call the route functions and pass in the app variables

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app); 
 
// Instantiate listener

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});            