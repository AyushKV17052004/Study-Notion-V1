import ReactStars from "react-stars"
import del from "../../../assets/delete.png"
import { removeCourse } from "../../../Redux/slices/Cart"
import { useDispatch } from "react-redux"
function Card({course}){
   const dispatch = useDispatch()

    return(
        <div className="w-[600px] flex justify-start  items-center border-b border-gray-400 pb-2">
               <div>
                <img className="w-[200px] rounded-md object-contain" src={course.thumbnailUrl} alt="" />
               </div>
               <div className="flex flex-col pl-3 lg:w-[400px] justify-evenly gap-y-1 items-start">
                <div className="flex justify-between w-full items-center">
                <h1 className="text-md font-bold text-white" >{course.courseName}</h1>
                <button onClick={() => {
                    dispatch(removeCourse(course._id))
                }} className="text-red-500 bg-black rounded-md text-xs font-bold cursor-pointer hover:scale-95 border-red-400 border px-1 py-1 flex gap-x-1"><img className="w-[12px] object-contain invert" src={del} alt="" /> Remove</button>
                </div>
                <p className="text-gray-400 italic text-sm">By {course.instructor?.firstName} {course.instructor?.lastName}</p>
             
             <div className="w-full flex justify-between items-center"> 
        <div className="flex items-center justify-center gap-x-1"> 
            <h1 className="text-yellow-300 text-sm">4.0</h1>
             <ReactStars
        count={5}
        value={4}   // use 1-5 scale
        size={20}
        edit={false}           // readonly
        isHalf={true}
        activeColor="#facc15"
      />
      </div>
      <h1 className="text-yellow-400 text-md italic font-bold">Rs. {course.price}</h1>
      </div>
        <h1 className="text-sm font-bold text-white">Total Courses - Beginner Friendly</h1>
               </div>
        </div>
    )
}

export default Card