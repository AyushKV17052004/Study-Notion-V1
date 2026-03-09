import TopBar from "../Componenets/Core/Home/TopBar"
import NavBar from "../Componenets/Core/Home/NavBar"
import { useSelector } from "react-redux"
import Section1 from "../Componenets/Core/Contact/Section1";
import Footer from "../Componenets/Core/About/Footer";


function Contact(){
    const Menu = useSelector((state) =>state.Navbar.Menu);
    return(
        <div>
        
             <div className={`w-full flex justify-center items-center `}>
            <NavBar></NavBar>
         </div>
            <TopBar></TopBar>
          <Section1></Section1>
          <Footer></Footer>
        </div>
    )
}

export default Contact 