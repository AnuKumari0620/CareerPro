const express = require('express');
const { signupValidation, loginValidation } = require('../validation/validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const router = express.Router();

const checkAuth = require("../middleware/check-auth");

// const auth = require('../../middleware/auth');
const grigrowuserController = require('../controllers/grigrowuserController');




//Add Seller
router.post('/grigrowusers', signupValidation, grigrowuserController.addgrigrowUsers, checkAuth);

//Get Seller
router.get('/getgrigrowUser', grigrowuserController.getwitsUser);

//Seller Login
router.post('/witslogin', loginValidation, grigrowuserController.witsLogin, checkAuth);



//Seller Login
router.post('/jobapplication', loginValidation, grigrowuserController.jobapplication, checkAuth);

module.exports = router;