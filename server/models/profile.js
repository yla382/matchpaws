var axios = require("axios");

var Profile = function(profile) {
	this.userId = profile.userId;
	this.bio = profile.bio;
	this.profile_img = profile.profile_img;
	this.pet = profile.pet;
}


Profile.create = async (profile) => {
	let response = await axios.post('http://localhost:8081/profile/createprofile', profile);
	console.log(response.data);
	return response.data;
}

module.exports = Profile;