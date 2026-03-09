const OTP = require("../models/OTP")
const User = require("../models/User")
const otp = require("otp-generator")
const bcrypt = require("bcrypt")
const Profile = require("../models/Profile")
const JWT  = require("jsonwebtoken")
require("dotenv").config()


//sendOTP
exports.OTPController = async (req ,res)=>{
  try{
    const {email} = req.body;
    const checkUser = await User.findOne({email});
    if(checkUser){
       return res.status(401).json({
            success:false,
            message:"User already Registered"
        })
    }
    var Otp = otp.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false,
    })

    let checkOTPExist = await OTP.findOne({Otp: Otp});
    
    //Loop runs unitl unique OTP is generated
    while(checkOTPExist){
        Otp = otp.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false,
    });
    checkOTPExist = await OTP.findOne({Otp: Otp});
    }
     
    const otpPayload = {email , Otp}
    const response = await OTP.create(otpPayload)

    res.status(200).json(
        {
            success:true,
            message:"OTP Sent Sucessfully",
            // response
        }
    )



  }catch(error){

  console.log(error);
  res.json({
    success:false,
    message:"Error while OTP Sending"    
  })

  }
}


//SignUp
exports.SignUpController = async(req , res) =>{
    try{
        const{firstName , lastName , email , Password , confirmPassword  , accountType , Otp  } = req.body;
        if(!firstName || !lastName || !email || !Password || !confirmPassword  || !Otp){
            return res.status(403).json({
                success:false,
                message:"All Fields are Mandatory"
            })
        }

        const checkPassword = (Password === confirmPassword);
        if(!checkPassword){
            return (res.status(400).json({
                success:false,
                message:"Passwords do not Match!"
            }))
        }


         const findUser = await User.findOne({email});
         if(findUser){
            return res.status(401).json({
                success:false,
                message:"User is Already Registered"
            })
         }

         const recentOTP= await OTP.find({email}).sort({createdAT:-1}).limit(1)
         if(recentOTP.length == 0){
            return res.status(400).json({
                success:false,
                message:"OTP not Found in DataBase , please sign up again"
            })
         }
         else if(recentOTP[0].Otp !== Otp){
            return res.status(400).json({
                success:false,
                message:"OTP does not Match , please try agian later"
            })
         }

         const hashedPass = await bcrypt.hash(Password , 10);

         const profile = await Profile.create({
            Gender:null,
            DOB:null,
            Profession:null,
            About:null
         });

         const Response = await User.create({
            firstName , lastName , email , Password:hashedPass ,additionalDetails:profile , accountType , imgURL:`https://api.dicebear.com/9.x/initials/svg?seed=${firstName}${lastName}`
         })
        res.status(200).json({
            success:true,
            message:"User Entry Created at DataBase",
            // Response
        })

    }
    catch(error){
        console.log(error);
       return res.json({
        success:false,
        message:"Error while Signing Up"
    })
    }

}

//LogIn
exports.LogInController = async (req,res)=>{

    try{
       const{email , Password} = req.body;
       if(!email || !Password){
        return res.status(403).json({
            success:false,
            message:"All Fields are Mandatory"
        })
       }

       const findUser  = await User.findOne({email});
       if(!findUser){
        return res.status(401).json({
            success:false,
            message:"User is not Registered"
        })
       }

       if((await bcrypt.compare(Password , findUser.Password))){
        const UserPayload = {
            email: findUser.email,
            id: findUser._id,
            accountType: findUser.accountType
        }
        const token  =  JWT.sign(UserPayload , process.env.JWT_SECRET , {
            expiresIn:"5h"
        })

        findUser.token = token;
        findUser.Password = undefined;
       
        const options ={
            expire:new Date(Date.now() + 2*60*60*1000),
            httpOnly:true
        }
       res.cookie("token" , token , options).status(200).json({
        success:true,
        token,
        findUser,
        message:"Logged in Successfully"
       })
    }
    else{
        return res.status(401).json({
            success:false,
            message:"Password Incorrect"
        })
    }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failed"
        })

    }
}


//changePassword

exports.changePasswordController = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Old password and new password are required",
      });
    }

    // get user with password
    const user = await User.findById(req.User.id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // check old password
    const isMatch = await bcrypt.compare(oldPassword, user.Password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    // prevent same password
    const isSame = await bcrypt.compare(newPassword, user.Password);
    if (isSame) {
      return res.status(400).json({
        success: false,
        message: "New password cannot be same as old password",
      });
    }

    // hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.Password = hashedPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Can't update password right now",
    });
  }
};
