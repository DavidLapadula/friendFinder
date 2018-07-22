// ===================================Dependencies========================================
 
let express = require("express");
let bodyParser = require("body-parser");

// ==============================Set up the Express App========================================

let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
 
// ==============================Require routing========================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app); 
 
// =========================Starts the server to begin listening================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});            