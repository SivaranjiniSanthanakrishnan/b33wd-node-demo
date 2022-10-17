const express = require('express');
const mongo = require('./connect');
const employeeRouter = require('./router/employee');
const productRouter = require('./router/product');
const registerRouter = require('./router/register');
const auth = require("./modules/authModule");

const dotenv = require('dotenv');

dotenv.config();
const app = express();
// to parse req.body, to send from client to express framework we are using this middleware
app.use(express.json());

mongo.connect();
mongo.connectMongoose();

app.use('/', (req,res,next) => {
   console.log("Custom Middleware");   
   next();
});
app.use('/register', registerRouter);
app.use("/", auth.authenticateUser);
app.use('/employee', employeeRouter);
app.use('/product', productRouter);


app.listen(process.env.PORT || 3000);
