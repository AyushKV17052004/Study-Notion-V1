import { useState } from "react";
import { useSelector } from "react-redux";
import { getProfile, updateImage, updateProfile } from "../../../services/ApiInstance";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { toast } from "react-toastify";
function EditProfile (){

    const [loading , setLoading] = useState(false);
    const navigate = useNavigate()
    const token  = useSelector((state) => (state.auth.token))
        const [Data , setdata] = useState({})
        async function getDetails() {
            try{
                const result  = await getProfile();
                if(result.data.success){
                  setdata(result.data.user)
                  setData({
    Profession: result.data.user.additionalDetails.Profession || "",
    DOB: result.data.user.additionalDetails.DOB || "",
    Gender: result.data.user.additionalDetails.Gender || "",
    About: result.data.user.additionalDetails.About || "",
    contactNumber: result.data.user.additionalDetails.contactNumber || ""
  });
                }
            }
            catch(error){
                console.log(error)
            }
        }
    
        useEffect(() => {
            if(token != null )
            getDetails();
        }, [token] )


    const [DATA , setData] = useState({Profession:"" , DOB:"" , Gender:"" , About:"" , contactNumber:""})

       function changeHandler(event){
    const{name , value , type, checked } = event.target;
    setData(prev=>{
      return{
        ...prev,
        [name]: type==="checkbox"?checked:value
      }
    })
  }

  async function updatePro() {
    
    try{
     const result = await updateProfile(DATA);
     if(result.data.success){
        toast.success(result.data.message);
     }
    }
    catch(error){
          console.log(error);
       
       
         const errorMessage =
           error?.response?.data?.message || "Something went wrong";
       
         toast.error(errorMessage);
    }
    
  }


  const [imgFile , setFile] = useState(null);



function imageChangeHandler(e) {
  const originalFile = e.target.files[0];
  if (!originalFile) return;

  const img = new Image();
  img.src = URL.createObjectURL(originalFile);

  img.onload = () => {
    const size = Math.min(img.width, img.height);

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");

    // center square crop
    ctx.drawImage(
      img,
      (img.width - size) / 2,
      (img.height - size) / 2,
      size,
      size,
      0,
      0,
      size,
      size
    );

    // convert canvas → File
    canvas.toBlob((blob) => {
      const croppedFile = new File([blob], originalFile.name, {
        type: originalFile.type,
      });

      setFile(croppedFile);
    }, originalFile.type);
  };
}



async function updateImg() {
    if(!imgFile){
        return}
     if(loading)
        return;
    
     setLoading(true)
     try{
      
     const result = await updateImage(imgFile)  
        if(result.data.success){
        toast.success(result.data.message);
        setFile(null);
     }
    }
    catch(error){
          console.log(error);
       
       
         const errorMessage =
           error?.response?.data?.message || "Something went wrong while uploading image";
       
         toast.error(errorMessage);
    }
    setLoading(false)
}
  





   return(
        <div >
            <div className="flex flex-col px-10 py-2 justify-evenly items-start gap-y-2">
                <button onClick={() => {
                    navigate(-1)
                }} className="text-gray-600 cursor-pointer text-sm">{`<`} Back</button>
                <h1 className="text-2xl  font-bold text-white">Edit Profile</h1>
            </div>
            <div className="lg:w-[800px] mx-auto w-11/12 flex flex-col gap-y-2 mt-10">
                
                  <div className="flex lg:w-[800px] mx-auto w-10/12 lg:flex-row flex-col px-2 py-1 justify-between items-center  bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] rounded-md border border-gray-700">
                    <div className="flex sm:flex-row flex-col justify-evenly items-center gap-x-5 py-3 text-center">
                        <img className="sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] rounded-full object-contain border border-black" src={imgFile ? URL.createObjectURL(imgFile) : Data.imgURL} alt="" />
                        <div className="flex flex-col justify-evenly gap-y-2 ">
                            <h1 className="text-white text-md font-bold">Change Profile Picture</h1>
                            <div className="flex flex-row gap-x-3">
                                 <input onChange={imageChangeHandler} type="file" accept="image/*" name="File" id="File" hidden  /> 
                                  <label className={`${imgFile === null?"":"hidden"} text-center bg-yellow-300 rounded-md px-2 text-sm cursor-pointer  py-1 text-black`} htmlFor="File">Change</label>
                                  <button onClick={()=>{
                                     if(imgFile!=null)
                                       updateImg();
                                  }} className={`${imgFile?"":"hidden"}   text-center bg-yellow-300 rounded-md px-2 text-sm cursor-pointer  py-1 text-black`}>{` ${loading===true?'Saving...':'Save'} `}</button>
                
                            </div>
                        </div>
                    </div>
                    
                  </div>
                  
                  <div className="mt-5 lg:w-[800px] mx-auto w-10/12 flex flex-col  justify-evenly bg-gray-900 rounded-md border border-gray-600 py-3 px-2">
                    <div className="flex flex-row  justify-center items-center">
                        <h1 className="text-white lg:text-lg text-md font-bold">Profile Details</h1>
       
                    </div>
                    <div className=" flex flex-col gap-y-5 mt-5 text-center">
                        <div className="flex lg:flex-row flex-col px-5 justify-between gap-y-2 items-center " >
                            <div className="flex flex-col gap-y-1 ">
                                <h1 className="text-gray-400 text-sm  ">Display Name</h1>
                                <h1 className="text-white text-md font-bold">{Data.firstName} {Data.lastName}</h1>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <h1 className=" text-gray-400 text-sm lg:text-right">Profession</h1>
                                <select onChange={changeHandler} className="rounded-md cursor-pointer text-xs text-white font-bold bg-gray-500 pr-2 pl-2"  value={DATA.Profession}  name="Profession" id="Profession">
                                    <option className=" text-xs " value="Developer">Developer</option>
                                    <option className="  text-xs " value="Student">Student</option>
                                    <option className="  text-xs " value="Instructor">Instructor</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col px-5 gap-y-2 justify-between items-center">
                             <div className="flex flex-col  gap-y-1">
                                <h1 className=" lg:text-left text-gray-400 text-sm">Date of Birth</h1>
                                <input className="bg-gray-500 cursor-pointer rounded-md text-xs text-white pr-2 pl-2" value={DATA.DOB} onChange={changeHandler} type="date" id="DOB" name="DOB" placeholder="dd/mm/yy" />
                            </div>
                            <div className="flex flex-col gap-y-1 lg:text-right">
                                <h1 className="text-gray-400 text-sm">Gender</h1>
                                <div className="flex sm:flex-row flex-col justify-evenly gap-x-4">
                                    <label className="flex items-center  font-bold gap-x-1 text-white text-xs">  <input onChange={changeHandler} type="radio" name="Gender" value="Male" checked={DATA.Gender === "Male"} /> Male</label>
                                    <label className="flex items-center  font-bold gap-x-1 text-white text-xs">  <input onChange={changeHandler} type="radio" name="Gender" value="Female" checked={DATA.Gender === "Female"} />  Female</label>
                                    <label className="flex items-center  font-bold gap-x-1 text-white text-xs">  <input onChange={changeHandler} type="radio" name="Gender" value="Others" checked={DATA.Gender === "Others"} />Others</label>
 

                                </div>
                            </div>
                        </div>
                           <div className="flex lg:flex-row flex-col px-5 gap-y-2 justify-between items-center">
                             <div className="flex flex-col  gap-y-1">
                                <h1 className="text-gray-400 text-sm lg:text-left">Contact</h1>
                                <input onChange={changeHandler} className="text-xs bg-gray-500 rounded-md text-center text-white"  type="text" id="contactNumber" value={DATA.contactNumber} name="contactNumber" placeholder="1234 5678" />
                            </div>
                            <div className="flex flex-col  gap-y-1">
                                <h1 className=" text-gray-400 text-sm lg:text-right">About</h1>
                                <textarea onChange={changeHandler} className="bg-gray-500  rounded-md text-xs px-1 py-1  text-white "  id="About" name="About" value={DATA.About} placeholder="Add Bio" />
                            </div>
                        </div>

                        <button onClick={() => {  updatePro()}} className="bg-yellow-300 px-3 py-1 cursor-pointer hover:scale-95 transition duration-300 font-bold mt-5 text-black rounded-md">Save</button>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default EditProfile