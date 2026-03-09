import TopBar from "../Componenets/Core/Home/TopBar";
import NavBar from "../Componenets/Core/Home/NavBar";
import Section1 from "../Componenets/Core/SignUp/Section-1";
import Footer from "../Componenets/Core/About/Footer";

function SIgnUp(){

    return(
        <div>
               <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
         <TopBar></TopBar>
         <Section1></Section1>
         <Footer></Footer>
        </div>
    )
}

export default SIgnUp