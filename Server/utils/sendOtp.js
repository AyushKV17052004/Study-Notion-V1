const nodemailer = require("nodemailer");
require("dotenv").config()
const maileSender = async (email , title , body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
             port: 587,
            secure: false,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            },
            family: 4,
        })
        let info = await transporter.sendMail({
            from:" STUDYNOTION || Ayush Verma ",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        console.log(info);
        return info;
    }
   
     catch (error) {
    console.log(error);
    throw error;
}

    }

module.exports = maileSender