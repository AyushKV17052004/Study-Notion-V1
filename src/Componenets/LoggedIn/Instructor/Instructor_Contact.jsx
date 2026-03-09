


import TopBar from "../../Core/Home/TopBar"

import Section1 from "../../Core/Contact/Section1"

import NavBar from "../../Core/Home/NavBar"
function Contact(){
 
    return(
        <div className="w-full bg-[rgb(3,1,29)]">
              <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
             <TopBar></TopBar>
  
          <Section1></Section1>

        </div>
    )
}

export default Contact