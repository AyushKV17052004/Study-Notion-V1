import TopBar from "../Home/TopBar"
import NavBar from "../Home/NavBar"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import {ResetPass} from "../../../services/ApiInstance"
import { useDispatch } from "react-redux"

function Reset(){
    const navigate = useNavigate()
   


    const [emailSent , setEmailSent] = useState(false);
    const [Email , setEmail]= useState("")
    const [loading , setLoading] = useState(false)
   function changeHandler(event){
   setEmail(event.target.value)
   }

    async function emailSender(event){

        event.preventDefault();
        const Data = {
            email: Email
        }
        setLoading(true)
        try{
            
            const result = await ResetPass(Data);
            if(result.data.success){
                toast.success(result.data.message);
                setEmailSent(true);
               
            }
         

        }
        catch(error){
            console.log(error)
            const errorMessage =
                    error?.response?.data?.message || "Something went wrong";
                
                  toast.error(errorMessage);
        }
        setLoading(false)


    }

    return(
        <div className="w-full bg-[rgb(3,1,29)] min-h-screen">
            <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
        <TopBar></TopBar>

        <div className="md:w-[500px] w-10/12 mx-auto flex flex-col justify-evenly gap-y-2 pt-30 ">
            <h1 className="text-white text-2xl font-bold">
                {`${emailSent === true?'Check Email':'Reset your password'}`}
            </h1>
            <p className="text-xs font-bold text-center text-gray-600">
                {`${emailSent === false?'Reset your password Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery':'Check email We have sent the reset email to your registered email account'}`}
            </p>
            <div className={`${emailSent === true ?"hidden":"block"} w-full flex flex-col items-start`}>
                <label className="text-white text-sm font-bold" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                <br />
                <input onChange={changeHandler} className={`w-full px-2 py-1 text-white text-md rounded-md bg-gray-600 ${emailSent === true ?"invisible":"visible"}  `} type="email" name="email" id="email" placeholder="Enter Email Address" value={Email}  />
            </div>
            <button onClick={emailSender} className={`w-full rounded-md text-center bg-yellow-400 text-md text-black cursor-pointer hover:scale-105 py-1 ${loading===true?"cursor-not-allowed":""} `}>{` ${emailSent === true?` ${ loading === true ? 'Resending Link...':'Resend Link'} ` : ` ${ loading === true ? 'Sending Link...':'Reset Password'} `}`}</button>
            <h1  onClick={() => {
                navigate("/Login")
            }} className="text-white text-md text-left cursor-pointer hover:brightness-90" >{`<---`} Back to Login</h1>
        </div>


        </div>
    )
}
export default Reset