const mongoose = require('mongoose');


const connectToDB = () => {
    mongoose.connect('mongodb://localhost:27017/MyDB').then(() => {
    console.log("Mongo Connected..")
    }).catch((err)=>{
        console.log("There was some error in connecting with DB");
    });
}
module.exports = {connectToDB};
