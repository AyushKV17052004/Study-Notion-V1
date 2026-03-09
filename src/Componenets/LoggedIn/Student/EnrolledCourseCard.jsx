import { useNavigate } from "react-router-dom"


function Card({course}){
 
    const navigate = useNavigate()
    return(
        <div className="flex lg:flex-row flex-col justify-start items-center gap-x-2 gap-y-1 py-2 px-2">
            <div className="self-start ">
                <img onClick={() => navigate(`/Student/Course/details/${course._id}`)} className="lg:w-[200px] w-[80px] object-contain rounded-md " src={course.thumbnailUrl} alt="" />
            </div>
             <div className="flex flex-col justify-between item-start">
                <h1 className="text-white text-[10px] lg:text-sm lg:font-bold">{course.courseName}</h1>
                <p className="line-clamp-3 text-[7px] lg:text-[10px] italic text-gray-500">{course.courseDescription}</p>
             </div>
        </div>
    )
}

export default Card