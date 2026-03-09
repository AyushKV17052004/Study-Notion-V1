import setting from "../../../assets/settings.png"
import profile from "../../../assets/user.png"
import edit from "../../../assets/edit.png"
import course from "../../../assets/book.png"
import enrolled from "../../../assets/enrolled.png"
import purchase from "../../../assets/purchase.png"
import wishlist from "../../../assets/wishlist.png"
import logout from "../../../assets/logout.png"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { NavLink } from "react-router-dom"
function Dashboard(){
          const dispatch = useDispatch()
   const navigate = useNavigate()


function logoutHandler(){
    dispatch(removeToken())
    navigate("/Login")
}
    return (
  
            
            <div className="md:w-[250px] w-full self-start min-h-full  left-0  flex flex-col items-start  gap-y-1  py-6 bg-gray-800">
                <div className="w-full flex flex-col items-start  py-1 gap-y-2 text-[10px] sm:text-sm font-bold text-gray-500 border-b border-gray-600 pb-5 ">
                 
                    <NavLink to="/Instructor/Home/Dashboard/MyProfile" className={({ isActive }) =>   `w-full py-2 px-2 flex justify-start items-center gap-x-2     ${isActive ? "bg-orange-600/20 border-l-4 border-yellow-400 text-yellow-600" : "text-gray-500"}` }>
                            <img className="w-[15px] invert" src={profile} alt="" />
                             <h1>My Profile</h1>
                     </NavLink>


                  
                    

                    </div>


                     <div className="w-full flex flex-col items-start  py-1 gap-y-2 text-[10px] sm:text-sm font-bold text-gray-500 border-b border-gray-600 pb-5 ">
                       <h1 className="text-md ml-2 font-bold text-white ">Instructor</h1> 
                   <NavLink to="/Instructor/Home/Dashboard/MyCourses" className={({ isActive }) =>   `w-full py-2 px-2 flex justify-start items-center gap-x-2     ${isActive ? "bg-orange-600/20 border-l-4 border-yellow-400 text-yellow-600" : "text-gray-500"}` }> 
                   <img className="w-[15px] invert" src={enrolled} alt="" />
                    <h1>My Courses</h1>
                   </NavLink>



                    
                </div>

                <div className=" flex flex-col gap-y-3 text-gray-500 text-[10px] sm:text-sm font-bold mt-5">
                      <NavLink to="/Instructor/Home/Dashboard/EditProfile" className="w-full ml-3" >
                        <div className={` w-full py-2 px-2 flex justify-start items-center gap-x-2  `}>
                            <img className="w-[13px] w-[10px] invert object-cover" src={edit} alt="" />
                            <h1>Edit Profile</h1>
                        </div>
                    </NavLink>
                    <div className="flex justify-evenly items-center ">
                        <img className="sm:w-[13px] w-[10px] invert object-cover" src={setting} alt="" />
                    <button>Settings</button>
                    </div>
                     <div onClick={logoutHandler} className="flex cursor-pointer justify-evenly items-center  py-2">
                            <img className="sm:w-[15px] w-[10px] object-contain invert" src={logout} alt="" />
                        <button  className=" cursor-pointer hover:brightness-90">Log out</button></div>
                </div>

            </div>
        

       
     
    )
}

export default Dashboard