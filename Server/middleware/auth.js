
const User = require("../models/User")
const jwt  = require("jsonwebtoken")
require("dotenv").config()

// auth
exports.auth = async (req , res, next) =>{

    try{
         const authHeader = req.headers.authorization;

    const token =
      req.cookies?.token ||
      req.body?.token ||
      (authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null);
          
          if(!token){
            return res.status(401).json(
                {
                    success:false,
                    message:"Token is Missing"
                }
            )
          }
          try{
            const decode =  jwt.verify(token , process.env.JWT_SECRET);
            console.log(decode);
            req.User = decode;
            
          }
          catch(error){
               return res.status(401).json(
                {
                    success:false,
                    message:"token is invalid"
                }
               )
          }
          next();

    }
    catch(error){
           console.log(error);
        //    console.log("Go To Login Page again");
           return  res.status(500).json({
            success:false,
            message:"Go To Login Page and try again"
           }) 
    }

}

exports.isStudent = async (req , res , next) =>{
    try{
       if(req.User.accountType !== "Student"){
        return res.status(401).json(
            {
                success:false,
                message:"This is Only For Student"
            }
        )
       }
       next();
    }
    catch(error){
          console.log(error);

    }
}
exports.isAdmin = async (req , res , next) =>{
    try{
       if(req.User.accountType !== "Admin"){
        return res.status(401).json(
            {
                success:false,
                message:"This is Only For Admin"
            }
        )
       }
       next();
    }
    catch(error){
          console.log(error);

    }
}

exports.isInstructor = async (req , res , next) =>{
    try{
       if(req.User.accountType !== "Instructor"){
        return res.status(401).json(
            {
                success:false,
                message:"This is Only For Admin"
            }
        )
       }
       next();
    }
    catch(error){
          console.log(error);

    }
}