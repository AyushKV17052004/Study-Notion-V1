import { useDispatch } from "react-redux";
import { removeToken } from "../../Redux/slices/auth";
import { useNavigate } from "react-router-dom";


function Logged(){

    const dispatch = useDispatch()
   const navigate = useNavigate()

function logoutHandler(){
    dispatch(removeToken())
    navigate("/Login")
}

    return(
        <div className="w-full bg-white flex justify-center items-center text-4xl text-black">
            You are Logged In
            <button onClick={logoutHandler} className="text-lg text-black">Log Out</button>
        </div>
    )
}

export default Logged;