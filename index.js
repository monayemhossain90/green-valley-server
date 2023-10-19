const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const {notFound,errorHandler}= require("./middleware/errorHandler")

const PORT = 5000;
// db connection
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/api/user',authRouter);
app.use(notFound);
app.use(errorHandler);


app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`)
})