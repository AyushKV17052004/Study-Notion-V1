import { useDispatch, useSelector } from "react-redux"
import {removeToken} from "../../Redux/slices/auth"
import { useNavigate } from "react-router-dom"
import Dashboard from "../../assets/dashboard.png"
import logout from "../../assets/logout.png"
import { removeAccount, removeID } from "../../Redux/slices/AccountType"

function card(){

      const dispatch = useDispatch()
   const navigate = useNavigate()
  const accountType = useSelector((state) => (state.account.accountType))
function logoutHandler(){
    dispatch(removeToken())
    dispatch(removeAccount())
    dispatch(removeID())
    navigate("/Login")
}


    return( 
<div className="md:w-[150px] bg-gray-700 flex flex-col justify-evenly items-start rounded-md py-2 px-2">
    <div className="flex justify-evenly gap-x-1 items-center border-b border-gray-500 rounded-sm px-1 py-2 ">
        <img className="w-[15px] object-contain invert" src={Dashboard} alt="" />
    <button onClick={() => {
        navigate( accountType==="Student"?"/Student/Home/Dashboard/MyProfile":"/Instructor/Home/Dashboard/MyProfile")
    }} className="text-white text-md font-bold  text-shadow-amber-200 cursor-pointer hover:brightness-90">Profile</button></div>
    <div onClick={logoutHandler} className="flex cursor-pointer justify-evenly gap-x-1 items-center border-b border-gray-500 rounded-sm px-1 py-2">
        <img className="w-[15px] object-contain invert" src={logout} alt="" />
    <button  className="text-white text-md font-bold  text-shadow-amber-200 cursor-pointer hover:brightness-90">Log out</button></div>
</div>

    )
}

export default card