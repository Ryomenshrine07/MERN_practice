const express = require('express');
const ProfileController = require('../Controllers/ProfileController');
const router = express.Router();


router.get('/profile', ProfileController.getProfileData);

module.exports = router;