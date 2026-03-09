import { useEffect, useState } from "react";
import wlcm from "../../../assets/WelcomeCourse.jpg"
import { getSubsection } from "../../../services/ApiInstance";
import ReviewCard from "./AddReview"
import { useParams } from "react-router-dom";


function Card({activeSubsection , setReviewPopup , ReviewPopup}){

    const [Subsection , setSubsection] = useState(null);
    
    async function getsubsection() {

        
        try{const Data ={
            subsectionId: activeSubsection
        }
               const result = await getSubsection(Data);
               if(result.data.success){
                  setSubsection(result.data.Subsection)
               
               }
        }
        catch(error){
            console.log(error)
        }
    }
  useEffect(() => {
    if(activeSubsection)
    getsubsection()
  } , [activeSubsection])

  if (!Subsection) return(
<div className={`flex md:justify-center justify-start items-center w-full min-h-screen md:mt-0 mt-5   flex-col gap-y-2` }>
       <img className= {`${ReviewPopup===true? "blur-[3px]":"blur-none"} w-10/12  object-contain border border-white rounded-md `} src={wlcm} alt="" />
               <h1 className={`md:text-2xl w-10/12 text-white text-sm font-bold`}>Click the Left Section/Lecture to Load Content</h1>     
     <div className={`${ReviewPopup===true? "":"hidden"} w-full flex justify-center items-center`}>

            <ReviewCard setReviewPopup={setReviewPopup} ReviewPopup={ReviewPopup}></ReviewCard>
           </div>
                    
 
            </div>
  )
  
    return(
        <div className="w-full z-10">
           

           <div className={`${ReviewPopup===true? "":"hidden"} w-full flex justify-center items-center`}>
            <ReviewCard setReviewPopup={setReviewPopup} ReviewPopup={ReviewPopup}></ReviewCard>
           </div>
           
            <div className={`${ReviewPopup===true? "blur-[3px]":"blur-none"}`}>
                <div className=" w-10/12 mx-auto flex flex-col justify-evenly items-start  gap-y-2 m-5">
                    <h1 className="text-lg font-bold  text-white">{Subsection.title}</h1>
                    <h1 className="text-gray-500 text-sm italic">
                        {Subsection.description}
                    </h1>
                </div>
                <div className="w-10/12 mx-auto mt-5">
                   <video className="w-full rounded-md border-2 border-gray-400" preload="metadata" controls src={Subsection.videoUrl}></video>
                </div>

                
                </div>

        </div>
    )
}


export default Card