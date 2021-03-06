var fileHandler = require('../fileHandler.js');
var Dogforadoption = require('../models/dogforadoption.js');

exports.getAlldogs = async (req,res) =>{
	var request = {
		userId: req.decoded.id
	};

	try{
		let alldogs = await Dogforadoption.getAlldogs(request);
		res.send(alldogs);
		//res.send(alldogs);

		
	} catch (err){
		console.log("Error at dogforadoptionController.getAlldogs");
		res.status(500).json({
			error:err,
			message: "load all dogs for adoption to view failed"
		});
	}
}

exports.submitDogforadoption = async (req, res) => {
	console.log("in dogfor adoption controller");
	console.log(req.files.length);
	for (var i = 0; i < req.files.length; i ++){
		let img_dir = req.files[i].destination + req.files[i].filename;
		req.files[i].buff = fileHandler.img2Base64(img_dir);
		fileHandler.deleteFile(img_dir);
	}

	var dogforadoption = new Dogforadoption ({
		name: req.body.name,
		age: req.body.age,
		monthyear: req.body.monthyear,
		gender: req.body.gender,
		breed: req.body.breed,
		description: req.body.description,
		dogimgs: req.files, //buffer should exist in img object
		agencyName: req.body.agencyName,
		location: req.body.location,
		website: req.body.website,
		tel: req.body.tel,
		time: req.body.time


	});

	try {
		let status = await Dogforadoption.create(dogforadoption);

		if(status.success) {
			console.log('dogforadoption created');
			res.status(200).json({
				success: true,
				message: 'dogforadoption creation success'
			});
		} else {
			console.log('dogforadoption not created');
			res.status(500).json({
				success: false,
				message: 'dogforadoption creation failed'
			});
		}
	} catch (err) {
		console.log("Error at dogforadoptionController.submitDogforadoption");

	}

}

exports.loadDog = async(req,res) =>{
	var dogReq = {
		dogid: req.body.dogid
	}
	try{
		let dogData = await Dogforadoption.loadDog(dogReq);

		if (dogData == null){
			res.status(500).json({
				success: false,
				message: 'dogforadoptio profile load failed'
			});

		} else {
			res.send(dogData);

		}
	} catch (err) {
		console.log("Error at dogforadoptionController.loadDog");
	}

}