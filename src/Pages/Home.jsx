import Section1 from "../Componenets/Core/Home/Section1"
import Section2 from "../Componenets/Core/Home/Section2"
import Section3 from "../Componenets/Core/Home/Section3"
import Section4 from "../Componenets/Core/Home/Section4"
import Section5 from "../Componenets/Core/Home/Section5"
import Section6 from "../Componenets/Core/Home/Section6"
import TopBar from "../Componenets/Core/Home/TopBar"
import Footer from "../Componenets/Core/Home/Footer"
import NavBar from "../Componenets/Core/Home/NavBar"
import { useSelector } from "react-redux"


function Home(){
    
const Menu = useSelector((state) =>state.Navbar.Menu);
    return(
        <div className="overflow-x-hidden">
             <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
         <TopBar></TopBar>

         <Section1></Section1>
         <Section2></Section2>
         <Section3></Section3>
         <Section4></Section4>
         <Section5></Section5>
         <Section6></Section6>
         <Footer></Footer>
        </div>
    )
}

export default Home 