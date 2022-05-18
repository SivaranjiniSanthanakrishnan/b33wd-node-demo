const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

module.exports = {
    selectedDb: {},
    async connect(){
        try {
            const client = await MongoClient.connect(process.env.MONGODB_URL);
            this.selectedDb = client.db('b33wd');
        } catch(err) {
            console.error(err);
        }
    },
    async connectMongoose(){
        try {
            await mongoose.connect(process.env.MONGOOSE_URL)
            console.log('connection success');
        } catch(err) {
            console.error(err);
        }
    }
}