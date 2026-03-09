import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "../Home/TopBar";
import { toast } from "react-toastify";
import NavBar from "../Home/NavBar";
import { signup } from "../../../services/ApiInstance";

function OTP() {

  const inputsRef = useRef([]);
  const navigate = useNavigate()
  const location = useLocation();
  const signupData = location.state?.signupData;
  const [loading , setLoading] = useState(false);
 async function resendHandler(){
    try{

      if(loading){
        return
      }
      setLoading(true)
     const EmailData = {
        email: signupData.email
      }
      toast.success("Sending OTP Again")
    const res = await fetch("http://localhost:4000/api/v1/auth/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(EmailData),
    });
    const result = await res.json();

    if(result.success  === true){
      toast.success("OTP Sent Again")
    }
    else{
        toast.error(result.message)
    }

    console.log(result);
    }
    catch(error){
      console.log(error);
    }
    setLoading(false)
  }


if (!signupData) {
  toast.error("Signup data missing. Please signup again.");
  navigate("/signup");
  return null;
}
const [Otp, setOTP] = useState(Array(6).fill(""));


const handleChange = (e, index) => {
  const value = e.target.value;

  if (!/^[0-9]?$/.test(value)) return;

  const newOtp = [...Otp];
  newOtp[index] = value;
  setOTP(newOtp);

  if (value && index < 5) {
    inputsRef.current[index + 1].focus();
  }
};


  async function verifyHandler(event) {
     event.preventDefault();
      const finalOtp = Otp.join("");

  if (finalOtp.length !== 6) {
    alert("Enter complete OTP");
    return;
  }

 
  const finalData = {
    ...signupData,   
    Otp: finalOtp,   
  };
    console.log("Sending Object");
    try {
 
    
    const result = await signup(finalData)
   
    if(result.data.success === true){
    
      toast.success("User Registered Successfully")  
      navigate("/Login")
    }
    else{
    toast.error(result.data.message) 
     navigate("/Signup")
    
    }
    console.log(result.data);
  }
  catch(error){
   console.log(error)
    const errorMessage =
    error?.response?.data?.message || "Something went wrong";

  toast.error(errorMessage);
  }
}

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="w-full">
         <div className={`w-full flex justify-center items-center `}>
            <NavBar></NavBar>
         </div>
        <TopBar></TopBar>
    <div className="w-full bg-[rgb(3,1,29)] pt-30 flex justify-center items-center min-h-screen">
      <div className="md:w-[400px] w-10/12 mx-auto flex flex-col justify-center items-center gap-y-5">
        <h1 className="text-white text-2xl font-bold text-center">
          Enter the OTP sent to your Email
        </h1>

        <div className=" max-[300px]:scale-50 flex flex-row justify-center items-center gap-x-2">
          {[0, 1, 2, 3, 4, 5].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              placeholder="-"
              value={Otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="py-1 px-1 bg-gray-800 rounded-md text-white text-center w-10"
            />
          ))}
        </div>

        <button onClick={resendHandler} className="text-blue-500 text-sm font-bold self-end">resend OTP</button>

        <button onClick={verifyHandler} className={`w-24/25 px-3 py-2 text-md font-bold text-black bg-yellow-300 rounded-md cursor-pointer hover:scale-90 transition duration-500 ${loading===true?"cursor-not-allowed":""}`}>
          {`${loading===true?'Sending OTP....':'Verify Email'} `}
        </button>
         <h1  onClick={() => {
                navigate("/Signup")
            }} className="text-white text-sm text-left cursor-pointer hover:brightness-90" >{`<-`} Back to Login</h1>
      </div>
    </div>
    </div>
  );

}

export default OTP;
