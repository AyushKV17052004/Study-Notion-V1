

function Card({course}){
    return(
        <div className="flex lg:flex-row flex-col  justify-evenly py-1 gap-x-1 ">
           <div className="px-1  flex  justify-start items-center  py-1">
            <img className="rounded-md object-contatin lg:w-[200px] sm:w-1/2 w-3/4 " src={course.thumbnailUrl} alt="" />
           </div>
           <div className="flex flex-col gap-y-2 py-1 px-1 lg:w-[350px]">
            <h1 className="text-left text-white text-sm lg:text-md lg:font-bold">{course.courseName}</h1>
            <p className="text-xs lg:line-clamp-4  line-clamp-2 text-gray-500 text-left">{course.courseDescription}</p>
            <h1 className={`px-2 py-1 rounded-lg text-xs font-bold text-center border w-fit bg-gray-800 ${course.status === "Draft"?"text-red-400 border-red-500":"border-yellow-300 text-yellow-300"}`}>{course.status}</h1>
           </div>
        </div>
    )
}

export default Card