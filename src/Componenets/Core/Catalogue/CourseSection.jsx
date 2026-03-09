import Footer from "../Home/Footer";
import TopBar from "../Home/TopBar";
import SingleCourse from "./SingleCourseCard"

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