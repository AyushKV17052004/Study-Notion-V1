const mongoose = require("mongoose");


const ratingAndreviewSchema = new mongoose.Schema(
    {
     user:{
        type:mongoose.Schema.Types.ObjectId,
         required:true,
        ref:"User"
     },
     rating:{
        type:Number,
        required:true,
        min:0,
        max:5
     },
     review:{
        type:String,
         required:true,
     },
     Course:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      index:true,
      ref:"Course"
     } 
    }
)

module.exports = mongoose.model("ratingAndreview" , ratingAndreviewSchema);