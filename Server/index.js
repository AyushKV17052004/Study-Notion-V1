const express = require("express");
const App = express();
const bodyParser = require("body-parser");

const fileUpload = require("express-fileupload");
const userRoute = require("./Routes/User")
const RateRoute = require("./Routes/Rate")
const courseRoute = require("./Routes/Course")
const paymentRoute = require("./Routes/Payments")
const categoryRoute = require("./Routes/Category")

const cors = require("cors")
const cookieParser = require("cookie-parser")

require("dotenv").config();

App.use(express.json());
App.use(
  fileUpload({
     
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
App.use(
  "/api/v1/payment/verify",
  bodyParser.raw({ type: "application/json" })
);

App.use(cookieParser())

App.use(
    cors(
        {
            origin:"http://localhost:5173",
            credentials:true

        }
    )
)

const dbConnect = require("./config/database");
dbConnect();

const {cloudinaryConnect} = require("./config/cloudinary");
cloudinaryConnect();

App.use("/api/v1/auth" , userRoute)
App.use("/api/v1" , courseRoute)
App.use("/api/v1/rate" , RateRoute)
App.use("/api/v1/payment" , paymentRoute)
App.use("/api/v1/category" , categoryRoute)

App.get("/" , (req,res)=>{
    return res.json({
        success:true,
        message:"App is running"
    })
})

App.listen(4000 , ()=>{
    console.log("App is Running")
})