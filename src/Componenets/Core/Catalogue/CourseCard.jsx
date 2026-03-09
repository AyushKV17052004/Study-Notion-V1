import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ReactStars from "react-stars";

function Card ({course}){
 const token = useSelector((state) => (state.auth.token)) 
const navigate  = useNavigate()

   return(
    <div onClick={() => {
      
      if(token != null){
        navigate(`/Student/Catalogue/Course/${course._id}`);
      }
      else
      navigate(`/Catalogue/Course/${course._id}`)
    }
      
      
      }  className="md:min-w-[280px] min-w-[150px] flex flex-col gap-y-3 px-1 py-1 hover:scale-105 transition snap-start  duration-300 hover:bg-blue-700 rounded-md cursor-pointer">
        <img className="w-full object-contain rounded-md" src={course.thumbnailUrl} alt="" />
        <h1 className="text-white text-xs font-bold text-left line-clamp-2">{course.whatYouWillLearn}</h1>
        <h2 className="text-xs text-gray-600 font-bold text-left">by {course?.instructor?.firstName} {course.instructor.lastName}</h2>
         <div className="flex gap-x-1 justify-start items-center"> <ReactStars
        count={5}
        value={4}   // use 1-5 scale
        size={20}
        edit={false}           // readonly
        isHalf={true}
        activeColor="#facc15"
      />
      <h1 className="text-xs top-[2px] relative text-white">500</h1>
      </div>
        <h1 className="text-sm font-bold text-white text-left">Rs. {course.price}</h1>
    
    </div>
   )
}

export default Card