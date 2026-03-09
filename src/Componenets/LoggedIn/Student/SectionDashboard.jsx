import { useEffect, useState } from "react"
import { getAllSections } from "../../../services/ApiInstance";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import monitor from "../../../assets/monitor.png"
function Card({setActive , setReviewPopup , ReviewPopup}){
 
    const {courseId} = useParams();
   
    const [AllSections , setSection] = useState([]);
    const token = useSelector((state) => (state.auth.token));
    const accountType  = useSelector((state) => (state.account.accountType))   
    const [subsectioncard , setCard] = useState("")
    async function getSections(){

        try{
            const Data = {
                courseId:courseId
            }
            const result = await getAllSections(Data);
            if(result.data.success){
                setSection(result.data.AllSection.courseContent)
            }

        }
        catch(error){
            console.log(error)
        }
    }

useEffect(() => {
   
    getSections()
} , [])
    return(
        <div className={`${ReviewPopup === true? "blur-[1px]":""} md:w-[250px] w-full self-start min-h-screen  left-0  flex flex-col items-start  gap-y-1  py-6 bg-gray-800`}>
            <div className="flex flex-col w-11/12 mx-auto ">

                <h1 className="text-md font-bold text-white mb-2">Learn python</h1>
                  <button onClick={() => setReviewPopup(true)} className="bg-yellow-300 rounded-md px-1 py-1 text-black text-xs cursor-pointer hover:scale-90">Add Review</button>
                  <ul className="flex flex-col gap-y-4 mt-5">
                 {   AllSections.map((section) => (
                    <div>
                       <li onClick={() => {
                        if(subsectioncard === "" || subsectioncard !== section._id){
                            setCard(section._id)
                        }
                        else{
                            setCard("")
                        }
                       }} className="flex md:flex-row flex-col gap-y-1 justify-between items-center cursor-pointer text-[10px] bg-gray-300 rounded-md text-gray-900 px-1 py-1">
                         <h1 className="select-none" >{section.sectionName}</h1>
                         <div className="flex gap-x-1 justify-center items-center ">
                            <h1>50 min </h1>
                            <h1 className={`font-bold  transition duration-300 ${subsectioncard === section._id?"rotate-90":""} `}>{`>`}</h1>
                         </div>

                       </li>
                       
                          <div className={`bg-gray-800 transition duration-500 flex flex-col mt-1  justify-evenly gap-y-1 ${subsectioncard === section._id?"block":"hidden"} `}>
                         {section?.subSection?.map((subsection) => (
                                
                                  <div onClick={() => setActive(subsection._id)} className="hover:bg-black hover:rounded-md py-1 px-1 flex gap-x-1 cursor-pointer select-none items-center">
                                    <img className="invert w-[10px] object-contain" src={monitor} alt="" />
                                    <h1 className="text-[10px]  text-white">{subsection.title}</h1>
                                    
                                 </div>
                               
                            ))}
                             </div>
                          
                       
                       </div> 
                    ))
                }</ul>
                  

            </div>
        </div>
    )
}
export default Card