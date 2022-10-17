const express = require('express');
const router = express.Router();
const employeeModule = require('../modules/employee');
const auth = require("../modules/authModule");

router.get('/get', employeeModule.getEmployees);

router.get('/getposts', employeeModule.getPosts);

router.post('/create',auth.authorizeUser, employeeModule.createEmployees)

router.put('/update/:employeeId', auth.authorizeUser, employeeModule.updateEmployees)

router.delete('/delete/:employeeId',auth.authorizeUser,  employeeModule.deleteEmployees);

module.exports = router;
