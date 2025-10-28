const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const AuthModel = require('./models/Authmodel');
const mongoDB = require('./Commons/mongoDB');
const app = express();
const AuthenticationRoutes = require('./routes/AuthenticationRoutes');
const authMiddleWare = require('./middlewares/auth');
const ProfileRoutes = require('./routes/ProfileRoutes');
const FileRoutes = require("./routes/FileRoutes");
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(authMiddleWare);

app.use(AuthenticationRoutes);
app.use(ProfileRoutes);
app.use(FileRoutes);




app.listen(PORT,() => {
    mongoDB.connectToDB();
    console.log("SERVER STARTED..........");
});