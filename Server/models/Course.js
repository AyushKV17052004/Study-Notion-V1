
const mongoose = require("mongoose");
// const User = require("./User");
// const Tag = require("./Tag");

const CourseSchema = new mongoose.Schema(
    {
      courseName:{
        type:String,
        trim:true,
         required:true,
        
      } ,
      courseDescription:{
        type:String,
        trim:true,
         required:true,
      } ,
      instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
      },
      whatYouWillLearn:{
        type:String
      },
      courseContent:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
      }
    ],
    ratingAndreview:[
    {
       type:mongoose.Schema.Types.ObjectId,
       ref:"ratingAndreview"
    }],
    price:{
        type:Number
    },
    thumbnailUrl:{
        type:String
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    Tags:{
      type:String
    },
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
    ,
    status:{
      type:String,
      default:"Draft",
      enum:["Published" , "Draft"]
    },
    instructions:{
      type:String
    }
    }
)

module.exports = mongoose.model("Course" ,CourseSchema);