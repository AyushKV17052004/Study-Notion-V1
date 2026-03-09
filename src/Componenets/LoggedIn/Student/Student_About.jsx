


import TopBar from "../../Core/Home/TopBar"
import AboutSection from "./AboutSection"
import NavBar from "../../Core/Home/NavBar"
function About(){
 
    return(
        <div className="w-full bg-[rgb(3,1,29)]">
              <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
             <TopBar></TopBar>

          <AboutSection></AboutSection>
          

        </div>
    )
}

export default About