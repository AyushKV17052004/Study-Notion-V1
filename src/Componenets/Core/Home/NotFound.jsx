import Notfound from "../../../assets/NotFound.png"
import Notfound2 from "../../../assets/404.png"
import TopBar from "./TopBar"
import { useNavigate } from "react-router-dom"

function NotFound(){
 const navigate = useNavigate();
 function clickHandler(){
    navigate("/")
 }


    return(
        <div>
          <TopBar></TopBar>
          <div className="w-full flex flex-col min-h-screen justify-center items-center gap-y-5 bg-[rgb(3,1,29)] pt-10">
            <div className=" w-5/12 relative flex justify-center items-center ">

                <img className="w-full object-contain z-10" src={Notfound2} alt="" />
                <img className=" w-1/4  object-contain z-20 absolute   animate-bounce" src={Notfound} alt="" />
               
                
            </div>
            <div className="mx-auto w-2/3 flex flex-col justify-center items-center gap-y-5">
                <h1 className="text-3xl font-bold text-white">Oops, you've lost in space</h1>
                <p className="text-md font-bold text-gray-500">We can't find the page you are looking for...</p>

                <button onClick={clickHandler} className="text-blue-700 text-lg font-bold rounded-lg py-1 px-2 cursor-pointer bg-gray-800">Go Home</button>
            </div>
          </div>
        </div>
    )
}

export default NotFound