import { useState } from "react";
import tick from "../../../assets/check.png"
import { PublishCourse } from "../../../services/ApiInstance";
import { toast } from "react-toastify";
function Card({courseId , setCourseId ,step , setStep}){

  const[loading ,setLoading] = useState(false)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function  CoursePublish() {
     
    if(loading)
      return;

    setLoading(true);
    try{
         const DATA  = {
          courseId: courseId
         }
      const result  = await PublishCourse(DATA);
      if(result.data.success){
        toast.success("Course has been Published");
     
       await sleep(2000)
        setLoading(false)
      
      setStep(0);
          
      }

    }
    catch(error){
      console.log(error);
     const errorMessage =
      error?.response?.data?.message || "Something went wrong!";           
     toast.error(errorMessage);
    }
 

  }



    return(
        <div>
             <div className="w-full flex items-center justify-start px-2 text-gray-500 text-md mt-5">
                            <button onClick={() =>{
                            
                                setStep(0);
                            }}>{`<`} Back to Courses</button>
                        </div>
                        <div>           
                             <div className="w-10/12 flex justify-center  mx-auto items-center mt-5">
                        <div className="flex flex-col gap-y-1 justify-center items-center ">
                         <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full  border bg-yellow-300 border-yellow-300"><img className="object-contain w-[20px]" src={tick} alt="" /></div>
                        
                         </div>
                         <div className=" sm:w-[180px] w-[20px] border-t  border-dashed border-yellow-300"></div>
                         <div className="flex flex-col gap-y-1 justify-center items-center">
                         <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full  border bg-yellow-300 border-yellow-300"><img className="object-contain w-[20px]" src={tick} alt="" /></div>
                      
                         </div>
                        <div className="sm:w-[180px] w-[20px] border-t border-dashed border-yellow-300"></div>
                         <div className="flex flex-col gap-y-1 justify-center items-center ">
                         <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-gray-500 border bg-gray-800 border-gray-500">3</div>
                        
                         </div>
                        </div>
                        </div>
                          
                          <h1 className="text-white text-2xl font-bold text-center">Course Publish</h1>

          <div className="sm:w-7/12 w-10/12 mx-auto border border-gray-500 bg-gray-900 rounded-md px-5 py-5 mb-5 mt-5">
          
          <div className="w-10/12 mx-auto flex flex-col justify-evenly gap-y-2">
              <h1 className="lg:text-2xl text-sm text-white font-bold text-left ">Publish Settings</h1>
            <div className="flex gap-x-1 items-center justify-start"><input type="checkbox" name="coursePublic" id="coursePublic"   ></input>
            <label className="text-white text-xs font-bold" htmlFor="coursePublic">Make this Course Public</label></div>
          </div>
          
          </div>

          <div className="w-7/12 mx-auto flex sm:flex-row flex-col gap-y-3 justify-between items-center mt-5">
            <button onClick={() => setStep(2)} className="text-white bg-gray-800 rounded-md  px-2 py-1  cursor-pointer hover:scale-95">Back</button>
            <button onClick={CoursePublish} className="text-black bg-yellow-300 px-2 py-1 rounded-md cursor-pointer hover:scale-95">{` ${loading===true ? 'Publishing...':'Save & Publish'}`}</button>
          </div>

                    
        </div>
    )
}


export default Card