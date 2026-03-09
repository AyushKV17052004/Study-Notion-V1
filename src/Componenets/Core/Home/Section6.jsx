import instructor from "../../../assets/Instructor.png"
import arrow from "../../../assets/arrow.png"
import { useNavigate } from "react-router-dom"


function Section6(){
 const navigate = useNavigate()
    return(
        <div className="w-full bg-[rgb(3,1,29)] pt-20 pb-10  ">
            <div className="w-10/12 mx-auto flex lg:flex-row flex-col gap-y-5 justify-evenly items-center gap-x-5">
                <div className="lg:w-[500px] w-10/12 ">
                    <img className="shadow-[-12px_-12px_0px_0px_rgba(255,255,255,1)]" src={instructor} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start gap-y-5 lg:w-[400px] w-10/12">
                    <h1 className="text-4xl font-bold self-start text-white">Become an <span className="text-blue-500">Instructor</span></h1>
                    <p className="text-gray-400 text-md font-bold">Instructors from around the world tech millions of students on Study Notion, We provide the tools and skills to teach what you love.</p>
                    <button className="px-5 bg-yellow-400 py-[4.8px] rounded-md hover:scale-90 transition duration-500 flex flex-row text-center font-bold cursor-pointer ">Start teaching Today<img className="ml-2 object-contain w-[30px] relative bottom-[2px]" src={arrow} alt="" /></button>                    
                    </div>
            </div>
            <div className="mt-20">
                <h1 className="text-4xl text-white font-bold text-center">Review from Other Learner</h1>
                {/* Mapping Remaining Here */}
            </div>
        </div>
    )
}

export default Section6