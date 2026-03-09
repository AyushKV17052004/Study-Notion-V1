import { useNavigate } from "react-router-dom"
import videoFile from "../../../assets/Home_pageVideo.mp4"

function Section1(){

    const navigate = useNavigate()


    return(
        <div className="w-full bg-[rgb(3,1,29)] py-20">
            <div className="mx-auto w-10/12  flex flex-col justify-center items-center ">
             <div className="flex flex-col justify-center items-center gap-y-5 w-10/12">
                <button onClick={() => {
                        navigate("/Signup")
                    }} className="px-10 py-1 rounded-2xl border-b-2 border-gray-600 text-gray-400 text-lg bg-gray-900 hover:scale-95 hover:border-white hover:text-white hover:bg-black cursor-pointer transition duration-500">Become an Instructor</button>
                <h1 className="text-4xl font-bold text-white">Empower Your Future with <span className="text-blue-500"> Coding Skills</span></h1>
                <p className="text-md text-gray-500 text-center font-bold">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
                <div className="flex flex-row justify-center items-center gap-x-3 mt-5 ">
                    <button onClick={() => {
                        navigate("/Signup")
                    }} className="px-3 py-2 text-lg font-bold text-black bg-yellow-300 rounded-md cursor-pointer hover:scale-90 transition duration-500">Learn More</button>
                    <button onClick={() => {
                        navigate("/Signup")
                    }} className="px-3 py-2 text-lg font-bold text-white bg-gray-700 rounded-md cursor-pointer hover:scale-90 transition duration-500">Book a Demo</button>
                </div>
             </div>
             <div className="mt-15 shadow-[-20px_-20px_60px_2px_rgba(135,206,235,0.45)]" >
               <video loop muted playsInline autoPlay className="z-20 relative pointer-events-none rounded-md md:shadow-[20px_20px_0_0]  shadow-white " src={videoFile}></video>
              

             </div>
            </div>
        </div>
    )
}

export default Section1