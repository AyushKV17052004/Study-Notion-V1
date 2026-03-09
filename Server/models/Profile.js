const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema(
    {
      
        Profession:{
        type:String,
        enum:["Developer" , "Student" , "Instructor" ]
        },

        DOB:{
        type:String,
        trim:true
        },

        Gender:{
        type:String,
        enum:["Male" , "Female" , "Other" ]  
        },

        About:{
            type:String,
            trim:true
        },
        contactNumber:{
            type:Number
        },
       
        
        
    }
)

module.exports = mongoose.model("Profile" , ProfileSchema);