import S1 from "../../../assets/S1.webp"
import S2 from "../../../assets/S2.webp"
import S3 from "../../../assets/S3.webp"
import S4 from "../../../assets/S4.png"
import { useNavigate } from "react-router-dom"
function Section1(){
 const navigate = useNavigate()
    return (
    <div className="bg-[rgb(3,1,29)] w-full pt-30">
        <div className="w-10/12 mx-auto flex flex-col gap-y-5">
             <h1 className="text-4xl font-bold text-white text-center">Driving Innovation in Online Education for a <span className="text-blue-500">Brighter Future</span></h1>
             <p className="text-gray-600 text-center text-md font-bold">Study Notion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
        </div>
        <div  className="w-10/12 flex flex-row flex-wrap gap-y-5 justify-evenly items-center mx-auto mt-15">
          <img className="object-contain w-[350px]" src={S1} alt="" />
          <img className="object-contain w-[350px]" src={S2} alt="" />
          <img className="object-contain w-[350px]" src={S3} alt="" />
         
        </div>
        <div className="w-10/12 mx-auto mt-20">
            <h1 className="text-4xl text-white font-bold text-center">
                " We are passionate about revolutionizing the way we learn. Our innovative platform <span className="text-blue-400">combines technology</span>, expertise, and community to create an <span className="text-red-500">unparalleled educational experience. "</span>
            </h1>
        </div>

        <div className="w-11/12 mx-auto flex lg:flex-row flex-col gap-y-5 justify-evenly items-center mt-20">
            <div className="lg:w-[600px] w-10/12 flex flex-col justify-evenly gap-y-10 ">
                <h1 className="text-red-500 text-2xl font-bold text-center lg:text-left">Our Founding Story</h1>
                <p className="text-md font-bold text-gray-500  text-center lg:text-left">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                <br /> As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
            </div>
            <div className="lg:w-[600px] w-10/12 flex justify-center items-center ">
                   <img className="object-contain shadow-[0_0_40px_rgba(255,80,100,0.95)]" src={S4} alt="" />
            </div>
        </div>
        <div className="w-11/12 mx-auto flex lg:flex-row flex-col gap-y-5 justify-evenly items-center mt-20">
        <div className="lg:w-[600px] w-10/12 flex flex-col justify-evenly gap-y-10 ">
                <h1 className="text-blue-500 text-2xl font-bold text-left">Our Vision</h1>
                <p className="text-md font-bold text-gray-500 text-left">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
            </div>
         <div className="lg:w-[600px] w-10/12 flex flex-col justify-evenly gap-y-10 ">
                <h1 className="text-yellow-500 text-2xl font-bold text-left">Our Mission</h1>
                <p className="text-md font-bold text-gray-500 text-left">our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
            </div>    
        
        </div>

        <div className="w-full px-5 flex sm:flex-row flex-col  justify-evenly items-center bg-gray-700 mt-20 py-5">
            <h1 className="text-xl text-white font-bold text-center">5k <br /><span className="text-gray-500 text-sm">Active Students</span></h1>
            <h1 className="text-xl text-white font-bold text-center">10k <br /> <span className="text-gray-500 text-sm">Mentors</span></h1>
            <h1 className="text-xl text-white font-bold text-center">200+ <br /><span className="text-gray-500 text-sm"> Courses</span></h1>
            <h1 className="text-xl text-white font-bold text-center">50+ <br /><span className="text-gray-500 text-sm"> Awards</span></h1>
        </div>
        <div className="w-10/12 mx-auto grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2  sm:grid-rows-4 gap-x-2 gap-y-2  mt-20">
           <div className="col-span-2 row-span-1 flex flex-col justify-evenly items-start gap-y-3 mt-10 py-7">
            <h1 className="text-2xl font-bold text-white ">World-Class Learning for <span className="text-blue-500">Anyone, Anywhere</span></h1>
           
            <p className="text-md font-semibold text-gray-400 ">Study Notion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
           <button onClick={() => {
                        navigate("/Signup")
                    }} className="px-3 py-2 text-lg font-bold text-black bg-yellow-300 rounded-md cursor-pointer hover:scale-90 transition duration-500">Learn More</button>      
           </div>
           
           <div className="py-5  flex flex-col justify-evenly items-start bg-gray-600 px-2">
             <h1 className="text-lg font-bold text-white ">Curriculum Based on Industry Needs </h1>
           
            <p className="text-md font-semibold text-gray-400 ">Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
           </div>

           <div className="py-5 mx-auto flex flex-col justify-evenly bg-gray-800 items-start px-2">
             <h1 className="text-lg font-bold text-white ">Our Learning Methods </h1>
           
            <p className="text-md font-semibold text-gray-400 ">Studynotion partners with more than 275+ leading universities and companies to bring quality education</p>
           </div>

           <div className="py-5 flex flex-col justify-evenly min-[100px]:hidden lg:block items-start px-2">

           </div>

           <div className="py-5 flex flex-col justify-evenly bg-gray-600 items-start px-2">
             <h1 className="text-lg font-bold text-white ">Certification </h1>
           
            <p className="text-md font-semibold text-gray-400 ">Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
           </div>

           <div className="py-5 flex flex-col justify-evenly bg-gray-800 items-start px-2">
             <h1 className="text-lg font-bold text-white ">Rating "Auto-grading" </h1>
           
            <p className="text-md font-semibold text-gray-400 ">Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
           </div>

           <div className="py-5  flex flex-col justify-evenly bg-gray-600 items-start px-2">
             <h1 className="text-lg font-bold text-white ">Ready to Work </h1>
           
            <p className="text-md font-semibold text-gray-400 ">Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
           </div>


        </div>

    </div>)
}

export default Section1