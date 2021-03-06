var router = require('express').Router();
var profileController = require('../controllers/profileController');

router.post('/createprofile', profileController.addProfile);

router.post('/createpetprofile', profileController.addPetProfile);

router.get('/getprofilebyid/:id', profileController.getProfileById);

router.post('/updateprofile/:id', profileController.updateProfile);

router.post('/tenrandomprofiles', profileController.getTenRandomProfiles);

router.post('/pushtoaddedlist', profileController.pushtoaddedlist);

router.post('/checkifmatch', profileController.checkifmatch);

router.post('/getmatchedusers', profileController.getmatchedusers);

module.exports = router;