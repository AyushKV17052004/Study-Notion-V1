import { useLocation, useParams } from "react-router-dom"
import Section from "../Componenets/Core/Catalogue/Section1";
import TopBar from "../Componenets/Core/Home/TopBar";
import NavBar from "../Componenets/Core/Home/NavBar";
import Footer from "../Componenets/Core/Home/Footer";
function Catalogue (){



    return(
        <div className="w-full">
          <TopBar></TopBar>
          <Section></Section>
          <Footer></Footer>
      </div>
    )
}


export default Catalogue