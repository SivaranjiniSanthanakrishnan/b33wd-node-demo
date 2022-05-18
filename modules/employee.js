const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.getEmployees = async (req,res,next) => {
   try{
       const employeeData = await mongo.selectedDb.collection("employees").find().toArray();
       res.send(employeeData)
   } catch(err) {
    console.error(err);
    res.status(500).send(err)
   }
}

module.exports.getPosts = async (req,res,next) => {
    try{
        const postData = await mongo.selectedDb.collection("posts").find().toArray();
        res.send(postData)
    } catch(err) {
     console.error(err);
     res.status(500).send(err)
    }
 }

module.exports.createEmployees = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("employees").insertOne(req.body.employee);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.updateEmployees = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("employees")
                        .findOneAndUpdate({_id:ObjectId(req.params.employeeId)}, 
                                          {$set: {...req.body.employee}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.deleteEmployees = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("employees").remove({_id: ObjectId(req.params.employeeId)});
        res.send(deletedData)
    }catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}