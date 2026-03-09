import TopBar from "../Componenets/Core/Home/TopBar";
import NavBar from "../Componenets/Core/Home/NavBar";
import Footer from "../Componenets/Core/About/Footer";
import SignUp from "../Componenets/Core/RSignUp/SignUp";


function RSignUp(){
    return(
        <div>
              <div className={`w-full flex justify-center items-center  `}>
            <NavBar></NavBar>
         </div>
         <TopBar></TopBar>
         <SignUp></SignUp>
         <Footer></Footer>     
        </div>
    )
}
export default RSignUp