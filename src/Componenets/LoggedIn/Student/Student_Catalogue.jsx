import TopBar from "../../Core/Home/TopBar"
import Section from "../../Core/Catalogue/Section1"
import Footer from "../../Core/Home/Footer"


function Card(){
    return(
          <div className="w-full">
            <TopBar></TopBar>
            <Section></Section>
             {/* <SingleCourse></SingleCourse> */}
             <Footer></Footer>
        </div>
    )
}

export default Card