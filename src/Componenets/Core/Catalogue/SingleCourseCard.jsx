import { useEffect, useState } from "react";
import { GetCourse } from "../../../services/ApiInstance"
import ReactStars from "react-stars";
import Globe from "../../../assets/globe.png"
import { useNavigate, useParams } from "react-router-dom";
import dropdown from "../../../assets/dropdown.png"
import monitor from "../../../assets/monitor.png"
import protection from "../../../assets/protection.png"
import mobile from "../../../assets/smartphone.png"
import certificate from "../../../assets/certificate.png"
import { useDispatch, useSelector } from "react-redux";
import { addCourse, removeCourse } from "../../../Redux/slices/Cart";
import { toast } from "react-toastify";
function Card(){
    const token = useSelector((state) => (state.auth.token))
    const AllCourses  = useSelector((state) => (state.Cart.Courses))
    const accountType = useSelector((state) => (state.account.accountType))
    const dispatch = useDispatch()
    const [COURSE , setCourse] = useState({});
    const {courseId}  = useParams()
    const navigate  = useNavigate()
 async function courseDetails() {
    const DATA = {
        courseId: courseId
    }
    try{
        const result  = await GetCourse(DATA);
        if(result.data.success){
            setCourse(result.data.Courses);
        }
    }
    catch(error){
     console.log(error)
    }
    
 }
 useEffect(()=>{
    courseDetails()
 } , [courseId])



    return(
       
              <div className="w-full pt-13 bg-[rgb(3,1,29)] pb-10">
            <div className="w-full bg-gray-800 py-5">
                <div className="w-10/12 mx-auto flex md:flex-row flex-col gap-y-2 items-center gap-x-5 justify-evenly">
                    <div className="flex flex-col justify-evenly gap-y-2">
                        <h1 className="text-sm text-gray-500 ">Home / Catalogue / <span className="text-yellow-300">{COURSE.Category?.name}</span> </h1>
                        <h1 className="text-2xl font-bold text-white">{COURSE.courseName}</h1>
                        <p className="text-gray-500">{COURSE.courseDescription}</p>
                        <div className="flex items-center justify-start gap-x-1"><ReactStars
                      count={5}
                          value={4}   
                           size={20}
                          edit={false}       
                            isHalf={true}
                        activeColor="#facc15"
                          />
                          <h1 className="text-white text-sm relative top-[2px]">{`(312,330)`}</h1>
                          </div>
                         <h1 className="text-sm font-bold text-white"><span className="text-xs text-gray-600">Created By</span> {COURSE.instructor?.firstName} {COURSE.instructor?.lastName} </h1> 
                          <div className="flex justify-start items-center  gap-x-1">
                            <img className="w-[15px] invert  object-contain" src={Globe} alt="" />
                            <h1 className="text-gray-500 text-sm ">English  </h1>
                          </div>
                        </div>
                        <div className="lg:w-[400px] h-fit rounded-md flex flex-col gap-y-1 bg-gray-700 pb-3 ">
                            <img  className=" rounded-md" src={COURSE.thumbnailUrl} alt="" />
                            <h1  className=" italic text-sm font-bold text-white text-center">Rs. {COURSE.price}</h1>
                            <button onClick={() => {
                                if(accountType === "Student" && token !== null){
                                    if(AllCourses.includes(COURSE._id)){
                                    dispatch(removeCourse(COURSE._id))
                                  }
                                  else{
                                    dispatch(addCourse(COURSE._id))
                                     toast.success("Course Added to Cart")
                                  }
                                }
                                else{
                                   navigate("/Login")
                                }
                            }} className={`bg-yellow-300 px-2 py-1 w-10/12 text-xs font-bold mx-auto text-black  rounded-md text-center cursor-pointer hover:scale-95 `}>{`${AllCourses.includes(COURSE._id)?'Remove from cart':'Add to cart' } `}</button>
                            <button onClick={() => {

                              if(accountType === "Student" && token !== null){
                                  
                                    dispatch(addCourse(COURSE._id))
                                }
                                else{
                                   navigate("/Login")
                                }

                            }} className={`bg-gray-950 text-white w-10/12 mx-auto  text-xs font-bold px-2 py-1 rounded-md text-center cursor-pointer hover:scale-95`}>Buy Now</button>
                            <h1 className="text-center text-xs italic text-gray-400"><span className="text-red-500">*</span> 30 Days Money back guarantee</h1>
                            <div className="ml-2">
                                <h1 className="text-gray-300 text-sm font-bold mb-2">This Course Includes :-</h1>
                                <ul className="flex flex-col gap-y-2">
                                    <li>
                                        <div className="flex text-green-500 gap-x-1 text-xs font-semibold">
                                            <img className="w-[15px] object-contain invert" src={protection} alt="" />
                                            <p >Full Lifetime Access</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex text-green-500 gap-x-1 text-xs font-semibold">
                                            <img className="w-[15px] object-contain invert" src={mobile} alt="" />
                                            <p >Mobile and TV Access</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex text-green-500 gap-x-1 text-xs font-semibold">
                                            <img className="w-[15px] object-contain invert" src={certificate} alt="" />
                                            <p >Certificate on completion</p>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                   
                </div>

            </div>
              
              <div className="md:w-5/12 w-10/12 py-5 px-2 flex flex-col gap-y-1 mx-auto border-gray-600 rounded-md border mt-10 mb-5 ">
                 <h1 className="text-lg underline font-bold text-center text-white ">What You Will Learn</h1>
                 <div className="text-white text-center font-semibold">
                    {COURSE.whatYouWillLearn}
                 </div>
              </div>

              <div className="w-10/12 mx-auto flex flex-col gap-y-2">
                <h1 className="text-xl font-bold text-white text-left">Course Content</h1>
                <p className="text-xs italic text-white text-left "> • {COURSE.courseContent?.length} Sections • {COURSE.courseContent?.subSection?.length} Lectures • 15h 10m total length</p>
                <div>
                    <ul className="w-full">
                        {
                            COURSE.courseContent?.map((section) => 
                            (
                                <li className="text-md w-full font-bold text-white bg-gray-600 px-2 border border-gray-400 group cursor-pointer ">
                                    <div className="flex justify-between items-center px-1 py-2">
                                     <div className="flex gap-x-2">   
                                        <img className="invert w-[20px] object-contain invert group-hover:rotate-180 transition duration-300" src={dropdown} alt="" />
                                    <h1 className="text-white text-sm">{section?.sectionName}</h1>
                                    </div>
                                    {/* Section Time Aggregate */}
                                    <h2 className="text-amber-300 text-sm">{section?.subSection?.length} lectures</h2>
                                    </div>
                                    <div className={`bg-[rgb(3,1,29)]
                                                   md:overflow-hidden
                                                    md:max-h-0
                                                  md:opacity-0
                                                 md:transition-all
                                                 md:duration-500
                                                 md:ease-in-out
                                                md:group-hover:max-h-[500px]
                                                     md:group-hover:opacity-100`}>
                                        <ul>
                                        {
                                           
                                            section?.subSection?.map((subsection) =>
                                            (
                                                <li className="text-white text-sm px-2 py-2 font-bold">
                                                    <div className="flex justify-between gap-x-2 group">
                                                        <div className="flex gap-x-1">
                                                     <img className="w-[15px] invert object-contain" src={monitor} alt="" />   
                                                    <h1>{subsection.title}</h1> 
                                                    </div>
                                                    <h2 className="text-xs self-end">{subsection.timeDuration}</h2>
                                                    </div>
                                                    <div className="text-white  px-2 py-2  md:overflow-hidden
                                                    md:max-h-0
                                                  md:opacity-0
                                                   md:transition-all
                                                 md:duration-500
                                                 md:ease-in-out
                                                md:group-hover:max-h-[500px]
                                                     md:group-hover:opacity-100">
                                                      <p className="text-xs text-gray-400">{subsection.description}</p>
                                                    </div>
                                                    </li>
                                            )
                                            )
                                         
                                        }
                                        </ul>
                                    </div>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>

                <div className="w-full mx-auto mt-10 flex flex-col gap-y-1">
                    <h1 className="text-xl font-bold text-white mb-2">AUTHOR</h1>
                    <div className="flex gap-x-5 items-center justify-start" >
                        <img className="w-[45px] h-[45px] rounded-full " src={COURSE.instructor?.imgURL} alt="" />
                        <h1 className="text-sm font-bold text-white">{COURSE.instructor?.firstName} {COURSE.instructor?.lastName}</h1>
                        <p className="text-xs text-gray-500 text-left" >{COURSE.instructor?.About}</p>
                    </div>
                </div>

                {/* Review Fetch Remaining */}
              </div>
              

            </div>
        
    )
}

export default Card