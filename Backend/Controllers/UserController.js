const User = require("../models/Authmodel");
const bcrypt = require('bcryptjs');




const register = async(req, res) => {
    console.log("REQUEST BODY :", req.body);
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email:email});
        if(user){
            // console.log(user);
            return res.status(200). json({
                success:false,
                message: "User with given email already exists"
            });
        }
        const saltRounds = 10;
        // genrating hashed value
        const salt = await bcrypt.genSalt(saltRounds); 
        // generating hashed passwored by hashing the current password with gen hashed value
        const hashedPass = await bcrypt.hash(password,salt);
        const newUser = await User.create({
            email:email,
            password:hashedPass
        });
        // Saving user to the users database
        await newUser.save();
        return res.status(201).json({
            success:true,
            newUser
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            error: "There was some problem registering user"
        });
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    try{

        const user = await User.findOne({email : email});
        if(!user){
            return res.status(404).json({
                success:false,
                message: "You have not registered with this mail"
            });
        }
        const isMatching =  await bcrypt.compare(password, user.password);
        if(isMatching){
            return res.status(200).json({
                succes:true,
                message: "Loggin in"
            });
        }else{
            return res.status(403).json({
                success:false,
                message:"Password is incorrect"
            })
        }

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            error: "There was some error in server while loggin in"
        });
    }
}

module.exports = {
    UserController:{register,login}
}