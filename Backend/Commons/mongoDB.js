const mongoose = require('mongoose');
require('dotenv').config()

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("Mongo Connected..")
    }).catch((err)=>{
        console.log("There was some error in connecting with DB");
    });
}
module.exports = {connectToDB};
