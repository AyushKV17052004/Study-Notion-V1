import Dashboard from "./Dashboard"
import TopBar from "../../Core/Home/TopBar"
import NavBar from "../../Core/Home/NavBar"
import Enrolled from "./Student_EnrolledCourses"
function Card(){
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
                <div className={`flex-1 justify-center items-center  `}>
                  <Enrolled></Enrolled>
                </div>
                  </div>
                    </div>
      
    )
}

export default Card