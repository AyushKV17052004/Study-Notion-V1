import { useEffect, useState } from "react"
import { completedCourse, GetCourse, getEnrolled } from "../../../services/ApiInstance";
import EnrolledCourseCard from "./EnrolledCourseCard"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import dots from "../../../assets/more.png"
import Bar from "./Progressbar"
import loading from "../../../assets/loading.png"
import del from "../../../assets/delete.png"
function Card(){

  const [active , setActive] = useState("All");
  const [Popup , setPopup] = useState("")
  const [AllCourses , setCourses] = useState([]);
  const token  = useSelector((state) => (state.auth.token));
 const accountType  = useSelector((state) => (state.account.accountType))
 async function TimeDuration(courseId){

try{
    const Data = {
        courseId: courseId
    }
  const result = await GetCourse(Data);
  let totalTime = 0;
  if(result.data.success){
    const Course = result.data.resposne;
    for(const subsection of Course.courseContent.subSection){
        let Hour = 0;
        for(let i = 0 ; i <subsection.timeDuration.length ; i++){
           if(subsection.timeDuration[i] != 'h'){
            Hour  = Hour*10 + (subsection.timeDuration[i]-'0');
           }
           else{
            break;
           }
        }
        totalTime += Hour;
    }
  }
  return totalTime;
}
catch(error){
    console.log(error);
}

 }
  async function EnrolledCourses() {
  
    try{

        const result  = await getEnrolled();
        if(result.data.success){
           setCourses(result.data.Student.Courses)
         
          
        }
     



    }
    catch(error){
        console.log(error)
    }
  }


  useEffect(() => {
   if(token!=null && accountType==="Student")
    EnrolledCourses()
  } , [])

    return(
        <div>
               <div className="flex flex-col justify-between items-start  w-full px-9 mx-auto">
            <div className="flex flex-col  py-2 justify-evenly  gap-y-2">
                <p className="text-gray-600 text-sm">Home / Dashboard / <span className="text-yellow-400 text-md">Enrolled Courses</span></p>
               
            </div>
            <div className="flex justify-start px-2 text-white text-xl font-bold ">
                <h1>Enrolled Courses</h1>
          
            </div>
             
             <div className="flex justify-evenly item-center  bg-gray-800 rounded-2xl px-1 py-1 mt-5">
                <button onClick={() => setActive("All")} className={`text-gray-400 text-xs font-bold px-2 py-1 rounded-2xl cursor-pointer ${active==="All"?"text-white bg-black":""} `}>All</button>
                <button onClick={() => setActive("Pending")} className={`text-gray-400 text-xs font-bold px-2 py-1 rounded-2xl cursor-pointer ${active==="Pending"?"text-white bg-black":""} `}>Pending</button>
                <button onClick={() => setActive("Complete")} className={`text-gray-400 text-xs font-bold px-2 py-1 rounded-2xl cursor-pointer ${active==="Complete"?"text-white bg-black":""} `}>Complete</button>

             </div>
                <div className="w-12/12 border border-white mx-auto mt-5 px-0 mb-5">
             <table className="w-full ">
             <thead className="bg-gray-400">
                     <tr className="text-left text-white text-[10px] lg:text-lg border-b border-white  ">
                       <th className="lg:w-[60%] w-[50%] px-2">Course Name</th>
                       <th className="lg:w-[20%] w-[25%]">Duration</th>
                       <th className="lg:w-[20%] w-[25%]">Progress</th>
                        
                     </tr>
                 </thead>
                  <tbody>
                   
                   
                    
                   { AllCourses.map((course) => (
                    <tr className="text-left text-white text-[8px] lg:text-sm border-b border-white">
                       <td className="lg:w-[60%] w-[50%]  px-2" > <EnrolledCourseCard course={course}></EnrolledCourseCard></td>
                       <td className="lg:w-[20%] w-[25%]  ">15h 10min</td>
                       <td className="lg:w-[20%] w-[25%]  "> <div className="flex  relative z-10"> <div className="w-full"> <h1 className="lg:text-[10px]  text-gray-400 mb-1">Progress - 40%</h1> <Bar percentage={40} ></Bar></div> <img onClick={() => {
                        
                        if(Popup === "" || Popup !== course._id)
                        setPopup(course._id);
                        else
                        setPopup("");
                        }} className="invert cursor-pointer w-[20px] object-contain mr-5" src={dots} alt="" /> 
                       
                       <div className={`${Popup===course._id?"":"hidden"} bg-gray-600  gap-y-2 rounded-md flex flex-col justify-evenly items-start left-5 absolute px-2 py-1 text-white text-[10px]  z-50 `}>
                        
                        <div className="flex gap-x-1">
                            <img className="w-[13px] object-contain invert" src={loading} alt="" />
                            <h1  className="hover:bg-gray-800 px-2 cursor-pointer rounded-md select-none ">Mark as Completed</h1>
                        </div>
                        <div className="flex gap-x-1">
                        <img className="w-[13px] object-contain invert" src={del} alt="" />
                        <h1 className="hover:bg-gray-800 px-2 cursor-pointer rounded-md select-none ">Remove</h1>
                        </div>
                       </div>
                       
                       </div> </td>
                     </tr>
                    ))
                }
               
                   



                  </tbody>
                 </table>
            </div>
             </div>
        </div>
    )
}

export default Card