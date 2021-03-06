var axios = require("axios");
var config = require("../config");

var Dogforadoption = function(doginfo) {
	this.name = doginfo.name,
	this.age = doginfo.age,
	this.monthyear = doginfo.monthyear,
	this.gender = doginfo.gender,
	this.breed = doginfo.breed,
	this.description = doginfo.description,
	this.dogimgs = doginfo.dogimgs,
	this.agencyName = doginfo.agencyName,
	this.location = doginfo.location,
	this.website = doginfo.website,
	this.tel = doginfo.tel,
	this.time = doginfo.time

}

Dogforadoption.create = async (doginfo) => {
	let response = await axios.post(config.addr_mongo + '/dogforadoption/createdogforadoption', doginfo);
	return response.data;

}

Dogforadoption.getAlldogs = async (request) => {
	//no need for request. just show all the dogs
	let response = await axios.get(config.addr_mongo + '/dogforadoption/getAlldogs', request);
	return response.data;
}

Dogforadoption.loadDog = async (dogReq) =>{
	let response = await axios.post(config.addr_mongo + '/dogforadoption/loadDog', dogReq);
	return response.data;
}

module.exports = Dogforadoption;
		
