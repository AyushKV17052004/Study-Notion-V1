import { useState } from "react"
import cross from "../../../assets/cross.png"
import videoIcon from "../../../assets/video.png"
import { createSubsection, updateSubsection } from "../../../services/ApiInstance";
import { toast } from "react-toastify";

function Card({activeSection ,activeSubsection , setSubsection ,setActive , section , setSections}){


    const [Data ,setData] = useState({title:"" , description:""  , videoFile: null , Hour:"" , Min:"" , Sec:"" });
    const sectionID = section._id;
     const [loading , setLoading] = useState(false);
function buildTimeString(hour, minute, second) {
  const h = Number(hour || 0);
  const m = Number(minute || 0);
  const s = Number(second || 0);

  let parts = [];

  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}min`);
  if (s > 0) parts.push(`${s}sec`);

  return parts.join(" ") || "0sec";
}


async function UpdateSubSection(event) {
   event.preventDefault();
    if(loading)
        return;

    setLoading(true);

  try{
      const Time = buildTimeString(Data.Hour , Data.Min , Data.Sec);
            const payload = {
      ...Data,
      timeDuration:Time,
      subsectionId:activeSubsection
    };

    const result  = await updateSubsection(payload);

    if(result.data.success){
     
      setSections(prev =>
  prev.map(sec =>
    sec._id === sectionID
      ? {
          ...sec,
          subSection: sec.subSection.map(sub =>
            sub._id === activeSubsection
              ? {
                  ...sub,
                  title: result.data.updatedSubSection.title,

                }
              : sub
          ),
        }
      : sec
  )
);
toast.success("Subsection Updated Successfully")
    }
    setSubsection("");
     setActive("");
     setData({title:"" , description:""  , videoFile: null , Hour:"" , Min:"" , Sec:"" });
  }
  catch(error){
      console.log(error);
                   
                   
                     const errorMessage =
                       error?.response?.data?.message || "Something went wrong!";
                   
                     toast.error(errorMessage);
  }
  finally{
    setLoading(false)
    }
  
  
}



function changeHandler(event){
    const{name , value , type, checked } = event.target;
    setData(prev=>{
      return{
        ...prev,
        [name]: type==="checkbox"?checked:value
      }
    })
  }

  function videoHandler(e){
     const file  = e.target.files[0];

    setData(prev => ({
          ...prev,
          videoFile: file
        }));
  }

  async function subsectionCreate(event) {
    event.preventDefault();
    if(loading)
        return;

    setLoading(true);

    try{
        const Time = buildTimeString(Data.Hour , Data.Min , Data.Sec);
            const payload = {
      ...Data,
      timeDuration:Time,
      sectionId:sectionID
    };
        const result = await createSubsection(payload);
        if(result.data.success){
                 setSections(prev =>
        prev.map(sec =>
          sec._id === sectionID
            ? { ...sec, subSection: [...sec.subSection, {_id:result.data.subsection._id,
              title: result.data.subsection.title
            }] }
            : sec
        )
      );

      setActive("");
      setData({title:"" , description:""  , videoFile: null , Hour:"" , Min:"" , Sec:"" });

        }
    }
    catch(error){
            console.log(error);
                   
                   
                     const errorMessage =
                       error?.response?.data?.message || "Something went wrong!";
                   
                     toast.error(errorMessage);
    }
    finally{
    setLoading(false)
    }
  }



    return(
        <div className={`${activeSection === sectionID?"":"hidden"} fixed inset-0 mx-auto my-auto flex flex-col  z-50 md:h-[500px] md:w-[450px] h-2/3 w-2/3 `}>
            <div className="w-full bg-gray-600 px-2 py-2 flex justify-between rounde-md">
                <h1 className="text-white text-sm font-bold ">Editing Lecture</h1>
                <img onClick={() => {
                    setActive("");
                }} className="w-[20px] object-contain " src={cross} alt="" />
            </div>

            <div className="w-full bg-gray-900 rounded-b-md">

             <form onSubmit={ activeSubsection ? UpdateSubSection : subsectionCreate } className="flex flex-col w-full px-2 mx-auto gap-y-2 py-2 justify-evenly items-center">
             
             <div className="flex flex-col gap-y-1 items-start w-full px-2 ">
                <h1 className="text-[10px] text-white">Lecture Video <span className="text-red-500">*</span></h1>
                <input onChange={videoHandler} accept="video/*" type="file" name="videoFile" id={sectionID} hidden />
                <label className="bg-gray-600 rounded-md border px-3 py-5 border-dashed border-gray-400 flex justify-center items-center w-full" htmlFor={sectionID}>
                  {Data.videoFile === null ? <div className="flex flex-col justify-evenly gap-y-2 items-center ">
                        <img className="invert w-[20px] object-contain " src={videoIcon} alt="" />
                        <p className="md:text-xs text-[8px] text-gray-300">Drag and Drop a Video File , or <span className="text-yellow-300">Browse</span> Max 6MB each</p>
                        <h1 className="text-gray-400 text-[10px]  font-bold">Aspect Ratio - 16:9</h1>
                    </div> : <div className="text-xl text-white">File Uploaded</div>}
                </label>
             </div>
             <div className="flex flex-col gap-y-1 items-start w-full px-2 ">

                <label className="text-[10px] text-white" htmlFor="title">Lecture Title <span className="text-red-500">*</span></label>
                <input onChange={changeHandler} className="w-full px-2 py-1 rounded-md text-sm text-gray-200 bg-gray-600" type="text" name="title" placeholder="Enter Lecture Title" value={Data.title}  />
             </div>

             <div className="flex flex-col gap-y-1 w-full items-start px-2">
                <label className="text-white text-[10px] " htmlFor="videoTiming">Video Playback Time -HH/MM/SS- <span className="text-red-500">*</span></label>
                <div className="w-full flex flex-row justify-evenly gap-x-2">
                    <input onChange={changeHandler} className="px-2 py-1 text-sm rounded-md text-gray-200 bg-gray-600 w-1/3" type="number" placeholder="HH" name="Hour" value={Data.Hour}  />
                    <input onChange={changeHandler} className="px-2 py-1 text-sm rounded-md text-gray-200 bg-gray-600 w-1/3" type="number" placeholder="MM" name="Min"  value={Data.Min} />
                    <input onChange={changeHandler} className="px-2 py-1 text-sm rounded-md text-gray-200 bg-gray-600 w-1/3" type="number" placeholder="SS" name="Sec" value={Data.Sec} />
                </div>
             </div>

             <div className="w-full flex flex-col gap-y-1 px-2 items-start w-full">
                <label className="text-[10px] text-white " htmlFor="description">Lecture Description <span className="text-red-500">*</span></label>
                <textarea  onChange={changeHandler} name="description" className="px-2 py-2 text-sm rounded-md w-full text-gray-200 bg-gray-600 "  id="description" placeholder="Enter Description of Video Lecture" value={Data.description}></textarea>
             </div>
                

            <div className="flex justify-end items-center mt-5 gap-x-2">
                <h1 onClick={() => {
                   
                    setActive("");
                }} className="text-sm  px-2 py-2 rounded-md bg-gray-950 cursor-pointer hover:scale-95 text-white">Cancel</h1>
                <button type="submit" className="text-black bg-yellow-300 rounded-md px-2 py-1 cursor-pointer hover:scale-95">{` ${loading?'Saving...':'Save'}`}</button>
            </div>


             </form>


            </div>
        </div>
    )
}

export default Card