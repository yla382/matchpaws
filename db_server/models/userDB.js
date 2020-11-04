mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	port: '3333',
	user: 'root',
	password: 'root',
	database: 'userdb'
});

connection.connect(function(err) {
	if(err) {
		console.log("Not Connected");
	} else {
		console.log("Connected!");
	}
});

module.exports = connection;