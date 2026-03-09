import { useEffect, useState } from "react";
import { getProfile } from "../../../services/ApiInstance"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Profile(){
      const navigate = useNavigate()
    const token  = useSelector((state) => (state.auth.token))
    const [Data , setData] = useState({})
    async function getDetails() {
        try{
            const result  = await getProfile();
            if(result.data.success){
              setData(result.data.user)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(token != null)
        getDetails();
    }, [token] )


    return(
        <div >
            <div className="flex flex-col px-10 py-2 justify-evenly items-start gap-y-2">
                <p className="text-gray-600 text-sm">Home / Dashboard / <span className="text-yellow-400 text-md">My Profile</span></p>
                <h1 className="text-2xl  font-bold text-white">My Profile</h1>
            </div>
            <div className="lg:w-[800px] mx-auto w-11/12 flex flex-col gap-y-2 mt-10">
                
                  <div className="flex lg:w-[800px] mx-auto w-10/12 lg:flex-row flex-col px-4 py-1 justify-between items-center  bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] rounded-md border border-gray-700">
                    <div className="flex sm:flex-row flex-col justify-evenly items-center gap-x-2 py-3 text-center">
                        <img className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] rounded-full object-contain" src={Data.imgURL} alt="" />
                        <div className="flex flex-col justify-evenly ">
                            <h1 className="text-white text-md font-bold text-left capitalize">{Data.firstName} {Data.lastName}</h1>
                            <p className="text-gray-400 sm:text-xs text-[8px] sm:font-bold  text-wrap">{Data.email}</p>
                        </div>
                    </div>
                    <button onClick={() => {
                    navigate("/Student/Home/Dashboard/EditProfile")
                   }}  className="bg-yellow-400 px-2 py-2 rounded-md cursor-pointer">Edit</button>
                  </div>
                  
                  <div className="mt-5 lg:w-[800px] mx-auto w-10/12 flex flex-col  justify-evenly bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] rounded-md border border-gray-600 py-3 px-2">
                    <div className="flex flex-row px-2 justify-between items-center">
                        <h1 className="text-white lg:text-lg text-md font-bold">Personal Details</h1>
                   <button onClick={() => {
                    navigate("/Student/Home/Dashboard/EditProfile")
                   }} className="bg-yellow-400 px-2 py-2 rounded-md cursor-pointer">Edit</button>
                    </div>
                    <div className=" flex flex-col gap-y-2 mt-5 text-center">
                        <div className="flex lg:flex-row flex-col px-5 justify-between  items-center " >
                            <div className="flex flex-col">
                                <h1 className="text-gray-500 text-xs font-bold lg:text-left">First Name</h1>
                                <h1 className="text-white text-xs font-bold capitalize lg:text-left">{Data.firstName}</h1>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <h1 className="text-gray-500 text-xs font-bold">Last Name</h1>
                                <h1 className="text-white text-xs font-bold capitalize lg:text-left">{Data.lastName}</h1>
                            </div>
                        </div>
                        <div className="flex  lg:flex-row flex-col px-5  justify-between items-center">
                             <div className="flex flex-col   gap-y-1">
                                <h1 className="text-gray-500 text-xs lg:text-left font-bold">Email</h1>
                                <h1 className="text-white sm:text-xs italic text-[8px]  lg:text-left">{Data.email}</h1>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <h1 className="text-gray-500 text-xs font-bold lg:text-left">Phone </h1>
                                <h1 className="text-white text-xs italic">123456789</h1>
                            </div>
                        </div>
                         <div className="flex flex-row px-5 justify-center lg:justify-between items-center">
                            <div className="flex flex-col gap-y-1">
                             <h1 className="text-gray-500 text-xs font-bold ">Account Type </h1>
                                <h1 className="text-white text-xs italic lg:text-left ">{Data.accountType}</h1>  
                                </div>
                         </div>
                    </div>
                  </div>
            </div>
        </div>
    )
}
export default Profile