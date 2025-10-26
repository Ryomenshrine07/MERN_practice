const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async(req, res, next) =>{
    try{
        if(req.path === '/login' || req.path === '/register') return next();
        const authHeader = req.header('Authorization');
        if(!authHeader){
            res.status(401).json({
                success:false,
                message: "No token provided"
            });
        }
        const tokenParts = authHeader.split(' ');
        if(tokenParts.length !== 2 || tokenParts[0] !== 'Bearer'){
            res.status(401).json({
                success:false,
                message:"Access denied. Malformed token"
            });
        }
        const token = tokenParts[1];
        try{
            // jwt.verify(token , secret key) => decoded data
            const decodedData = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decodedData);
            next();
        }catch(err){
            if(err.name == 'TokenExpiredError'){
                return res.status(401).json({
                    success:false,
                    message:'Access denied, Token has expired'
                });
            }else if(err.name == 'JsonWebTokenError'){
                return res.status(401).json({
                    success:false,
                    message:'Access denied, Token is Invalid'
                });
            }
            return res.status(500).json({
                    success:false,
                    message:'Server Error, There was some problem in authorization'
                });
        }

    }catch(err){
        console.log(err);
        return res.status(500).json({
                    success:false,
                    message:"Internal server error"
                });
    }  
}


// const req =  {
//     headers:{
//         Authorization: `Bearer w;iofjq4;fm;;qonvlk;asnv`
//     }
// }