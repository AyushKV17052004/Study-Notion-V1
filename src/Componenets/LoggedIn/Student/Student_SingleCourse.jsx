import TopBar from "../../Core/Home/TopBar"

import Footer from "../../Core/Home/Footer"
import SingleCourse from "../../Core/Catalogue/SingleCourseCard"

function Card(){
    return(
          <div className="w-full">
            <TopBar></TopBar>
           
             <SingleCourse></SingleCourse>
             <Footer></Footer>
        </div>
    )
}

export default Card