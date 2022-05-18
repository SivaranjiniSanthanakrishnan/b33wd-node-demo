const mongo = require('../connect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req,res,next) => {
    // req.body.users
    // Email and other user details

    // Email already exists validation
    const existUser = await mongo.selectedDb.collection('users').findOne({email: req.body.users.email});
    if(existUser) return res.status(500).send({msg : "You are already a registered User"})

    // Confirm Password Checking
    const confirmed = await checkPassword(req.body.users.password, req.body.users.confirmpassword);
    if(!confirmed) return res.status(500).send({msg : "password didn't match"})

    // Password Hashing
    const randomString = await bcrypt.genSalt(10);
    req.body.users.password = await bcrypt.hash(req.body.users.password, randomString);

    // Save in DB
    const savedResponse = await mongo.selectedDb.collection('users').insertOne(req.body.users)
    res.send(savedResponse);
}

const checkPassword = async (password, confirmpassword) => {
    if(password != confirmpassword) 
        return false
    else
        return true
}
exports.signin = async (req,res,next) => {

    // Validate Email
    const existUser = await mongo.selectedDb.collection('users').findOne({email : req.body.users.email})
    if(!existUser) return res.status(500).send({msg: "You are not a registered user"})

    // Password Validation
    const isValid = await bcrypt.compare(req.body.users.password, existUser.password )
    if(!isValid) return res.status(500).send({msg : "Password didn't match"})

    // Generate and send the token
    const token = jwt.sign(existUser, process.env.SECRET_KEY, {expiresIn : '1m'});
    res.send(token);
}