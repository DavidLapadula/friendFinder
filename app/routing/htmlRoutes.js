let path = require("path");

// export the function with the get requests for html 
module.exports = function(app){ 
 
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
  });  
};      