const express = require('express');
const router = express.Router();
const employeeModule = require('../modules/employee');

router.get('/get', employeeModule.getEmployees);

router.get('/getposts', employeeModule.getPosts);

router.post('/create', employeeModule.createEmployees)

router.put('/update/:employeeId', employeeModule.updateEmployees)

router.delete('/delete/:employeeId', employeeModule.deleteEmployees);

module.exports = router;