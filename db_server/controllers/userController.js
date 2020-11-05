var User = require("../models/user.js");

exports.signUp = async (req, res) => {
	var user = new User({username: req.body.username, password: req.body.password});

	console.log(req.body);
	
	try {
		let id = await User.create(user);
		//delete later
		console.log("User module")
		res.send("User created with id: " + id);
	} catch (err) {
		console.log("error");
		res.status(500).send(err); //error statement
	}
};