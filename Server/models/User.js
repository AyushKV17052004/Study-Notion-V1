const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
    {
        firstName:{
        type:String,
        required:true,
        trim:true
            
        },
        lastName:{
        type:String,
        required:true,
        trim:true
            
        },
         email:{
        type:String,
        required:true,  
        trim:true
        },
        accountType:{
          type:String,
          enum:["Admin" , "Student" , "Instructor"],
          required:true
        },
       
        Password:{
            type:String,
            required:true
        },
        confirmPassword:{
            type:String,
           
        },
        additionalDetails:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Profile"
        },
        Courses:[
            {
             type:mongoose.Schema.Types.ObjectId,
            ref:"Course"  
            }
        ],
        CourseProgression:[
            {
             type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
            }  
            ],
        imgURL:{
         type:String
          },  
      
        token:{
            type:String
        },
        tokenExpiry:{
           type:Date,
           default:Date.now()+(5*60*1000)
        }
        
    }
)

module.exports = mongoose.model("User" , UserSchema);