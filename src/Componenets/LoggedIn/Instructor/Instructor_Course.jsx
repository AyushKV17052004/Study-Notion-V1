
import TopBar from "../../Core/Home/TopBar"

import NavBar from "../../Core/Home/NavBar"

import Dashboard from "./Instructor_Dashboard"
import CourseCard from "./MyCoursesCard"
import { useState } from "react"
import CourseInfoCard from "../Instructor/CourseInfoCard"
import CourseBuilder from "../Instructor/CourseBuilder"
import CoursePublish from "../Instructor/CoursePublish"

function Home(){

    const [step , setStep] = useState(0);
     const [courseId , setCourseId] = useState("");
   const [activeSection , setActive] = useState("")
 
    return(
        <div className="w-full bg-[rgb(3,1,29)] ">
              <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
             <TopBar></TopBar>

             <div className="min-h-screen pt-12 w-full flex flex-row  z-10 ">
                <div className="md:w-[250px] w-1/4">
                <Dashboard></Dashboard>
                </div>
                <div className={`flex-1 justify-center items-center ${step === 0 ? "":"hidden"} `}>
                <CourseCard step={step} setActive={setActive} setStep={setStep} setCourseId={setCourseId} > </CourseCard>
                </div>
                <div className={`flex-1 justify-center items-center ${step === 1 ? "":"hidden"} `}>
                <CourseInfoCard setCourseId={setCourseId} setStep={setStep}></CourseInfoCard>
                </div>
                <div className={`flex-1 justify-center items-center ${step === 2 ? "":"hidden"} `}>
                <CourseBuilder key={courseId} activeSection={activeSection} setActive={setActive} setStep={setStep} step={step} courseId={courseId}></CourseBuilder>
                </div>
                <div className={`flex-1 justify-center items-center ${step === 3 ? "":"hidden"} `}>
                 <CoursePublish courseId={courseId} setCourseId={setCourseId}  setStep={setStep} step={step} ></CoursePublish>
                </div>
             </div>
          
          
          

        </div>
    )
}

export default Home