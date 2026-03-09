import { useDispatch } from "react-redux"
import cross from "../../../assets/cross.png"
import { hideMenu } from "../../../Redux/slices/NavbarSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dropdown from "../../../assets/dropdown.png"
import { useState , useEffect } from "react";
import { getProfile } from "../../../services/ApiInstance";
import CatalogCard from "../Home/CatalogCard"

function NavBar(){
    const Menu = useSelector((state) =>state.Navbar.Menu);
    const dispatch = useDispatch()
    const navigate  = useNavigate();
    const[hidden , setHidden] = useState(true)
    const accountType  = useSelector((state) => (state.account.accountType))

     const token = useSelector((state) => (state.auth.token))

      const [img, setImg] = useState(
         "https://th.bing.com/th/id/OIP.GeEEvvh1bNc8fdvZsq4gQwHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
       );
     
     
      async function getImage() {
       try{
         const result = await getProfile();
         if(result.data.success){
           setImg(result.data.user.imgURL)
         }
       }
       catch(error){
         console.log(error)
       }
      }
      useEffect(() =>{
        if(token != null)
       getImage()
      } , [token]);

    function SignHandler(){
      navigate("/Login")
    }
    function SignUpHandler(){
      navigate("/Signup")
    }


    return(
        <div className= {`w-11/12 min-[800px]:scale-0 mx-auto min-h-screen bg-gray-900 inset-0  flex flex-col  items-center py-2  px-2 fixed top-5 z-50 transition duration-500   ${Menu===false?" scale-0 ":" scale-100"} `}>
            
             
            
            <div className="bg-gray-600 py-2 px-2 rounded-md self-end">
                <img onClick={() => dispatch(hideMenu())} className="object-contain w-[30px]" src={cross} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center mt-50 gap-y-2  ">
                 <NavLink to={`${token === null?'/':`${accountType === "Student" ?'/Student/Home/Dashboard/MyProfile':'/Instructor/Home/Dashboard/MyProfile'} `}`} onClick={() => dispatch(hideMenu())} className={({ isActive }) =>
            `${
              isActive
                ? "text-yellow-400"
                : "text-white"
            }`
          } >
                <button className="text-lg font-bold cursor-pointer hover:brightness-90 " >Home</button>
            </NavLink>

            
              <div onClick={() =>{
                if(hidden)
                setHidden(false)
                else{
                  setHidden(true)
                }

              }} className={`flex flex-row ${accountType==="Instructor"?"hidden":"block"}  hover:brightness-90 relative `}>  <button className="text-white text-lg font-bold  cursor-pointer" >Catalogues</button>
                    <img className="object-contain invert relative top-[1.8px] left-[4px] w-[15px] cursor-pointer" src={dropdown} alt="" />
                    <div className={`min-h-[150px]  z-50   top-[25px] absolute  ${hidden === true?"invisible":"visible"} `}>
                                        <CatalogCard></CatalogCard></div>
              </div>
            
            <NavLink to={`${token === null?'/Contact':`${accountType === "Student" ?'/Student/Contact':'/Instructor/Contact'} `}`} onClick={() => dispatch(hideMenu())} className={({ isActive }) =>
            `${
              isActive
                ? "text-yellow-400"
                : "text-white"
            }`
          } >
                <button className="text-lg font-bold cursor-pointer hover:brightness-90 " >Contact Us</button>
            </NavLink>

            <NavLink to={`${token === null?'/About':`${accountType === "Student" ?'/Student/About':'/Instructor/About'} `}`} onClick={() => dispatch(hideMenu())} className={({ isActive }) =>
            `${
              isActive
                ? "text-yellow-400"
                : "text-white"
            }`
          } >
                <button className="text-lg font-bold cursor-pointer hover:brightness-90 " >About Us</button>
            </NavLink>
              
              

            </div>
              <div className={`flex flex-col items-center justify-evenly gap-y-2 mt-50 ${token?"hidden":""}`}>
                <button onClick={
              () => {dispatch(hideMenu()),SignUpHandler()}} className="text-lg text-gray-300 px-2 py-1 border border-gray-500 rounded-md  cursor-pointer">Sign up</button>
                <button onClick={
              () => {dispatch(hideMenu()),SignHandler()}} className="text-lg text-gray-300 px-2 py-1 border border-gray-500 rounded-md cursor-pointer">Log in</button>
            </div>
            
          
        </div>
    )
}

export default NavBar