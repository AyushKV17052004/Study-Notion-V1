import graph from "../../../assets/graph.png"
import people from "../../../assets/people.png"

function Card({setId,Data ,Id }){

    return(
        <div onClick={()=>setId(Data.id)} className= {` w-[350px] h-[250px] flex flex-col justify-between items-center  py-5 hover:scale-90 transition duration-300 cursor-pointer ${Data.id===Id? "bg-white shadow-[12px_12px_0px_0px_rgba(255,225,0,1)] ":"bg-gray-900"}`} >
        <div className="px-5"> <h1 className= {` text-xl font-bold ${Data.id===Id? "text-black":"text-white"}`}>{Data.title}</h1>
         <p className="text-sm font-semibold text-gray-500">{Data.description}</p>
          </div>
          <div className="flex flex-col w-full">
            <hr  />
            <div className="flex flex-row px-5 justify-between items-center">
           <div className={`flex flex-row gap-x-1 ${Data.id===Id? "":"invert"}`}>
            <img className="object-contain w-[15px]" src={people} alt="" />
            <p className={`text-blue-400 text-md   `}>
                Beginner
            </p>
           </div>
            
            <div className={`flex flex-row gap-x-1 ${Data.id===Id? "":"invert"}`}>
                <img  className="object-contain w-[15px]" src={graph} alt="" />
                <p className={`text-blue-500 text-md  `}>
                6 Lessons
            </p>
            </div>
            </div>
          </div>

        </div>
    )
}

export default Card