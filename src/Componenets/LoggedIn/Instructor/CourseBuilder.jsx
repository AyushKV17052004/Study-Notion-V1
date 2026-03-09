
import tick from "../../../assets/check.png"
import add from "../../../assets/add.png"
import { useEffect, useState } from "react"
import { createSection, deleteSubSection, getAllSections, getSubSections } from "../../../services/ApiInstance"
import pen from "../../../assets/pen.png"
import del from "../../../assets/delete.png"
import book from "../../../assets/open-book.png"
import { toast } from "react-toastify"
import { updateSection } from "../../../services/ApiInstance"
import SubSectionCard from "./SubSectionCard"
import { deleteSection } from "../../../services/ApiInstance"
import paper from "../../../assets/paper.png"
function Card({ step,setStep , courseId ,activeSection ,setActive}){

    const [sections , setSections] = useState([])
    const [sec , setSec] = useState("")
    const [newName , setName] = useState("") 
    const[Edit , setEdit] = useState(null)
    const [loading , setLoading] = useState(false)
    const [idx , setidx] = useState(0)
    const [activeSubsection , setSubsection] = useState("") 

function changeHandler(e) {
  setSec(e.target.value);
}
function newNameHandler(e) {
  setName(e.target.value);
}


async function SubsectionDelete(sectionId, subSectionId) {
  
  try{
    const tempData = {
      sectionId: sectionId,
      subsectionId:subSectionId

    }
    const result  = await deleteSubSection(tempData);
    if(result.data.success){
      setSections((prev) =>
  prev.map((section) =>
    section._id === sectionId
      ? {
          ...section,
          subSection: section.subSection.filter(
            (sub) => sub._id !== subSectionId
          ),
        }
      : section
  )
);

    }
  }
  catch(error){
    console.log(error);
           
           
             const errorMessage =
               error?.response?.data?.message || "Something went wrong!";
           
             toast.error(errorMessage);
  }
}




async function sectionUpdate(ID ){
if(!Edit)
    return

const DATA = {
  newSectionName: newName,
  sectionId: ID
  
}

try{
 const result  = await updateSection(DATA);
if(result.data.success){
  setSections(prevSections =>
    prevSections.map((section) =>
      section._id === ID
        ? { ...section, sectionName: newName }
        : section
    )
  );
toast.success("Section Name Updated Successfully");

}
}
catch(error){
 console.log(error);
   const errorMessage =
    error?.response?.data?.message || "Something went wrong!";         
   toast.error(errorMessage);
}
setName("")
setEdit(null)
}


async function sectionDelete(ID){
 
const DATA = {
  sectionId: ID,
  courseId: courseId
}
try{

const result = await deleteSection(DATA)
if(result.data.success){
  setSections(prevSections =>
    prevSections.filter(section => section._id !== ID)
  );
toast.success("Section has been deleted")
}



}
catch(error){
 console.log(error);
           
           
             const errorMessage =
               error?.response?.data?.message || "Something went wrong!";
           
             toast.error(errorMessage);
}


}


  async  function sectionHandler(){

          if (loading || !sec) return;
        
        setLoading(true);
        setidx(prev => prev + 1);

        const Data = {
            sectionName: sec,
            courseId: courseId
        }
        try{

            const result = await createSection(Data)
           
            if(result.data.success){
           setSections(prev => [
                  ...prev,
              {
                _id: result.data.section._id,
                sectionName: result.data.section.sectionName,
                subSection: [],
               index: idx
                       }
                          ]);
            toast.success("Section has been created Successfully")
        }

    }
    catch(error){
        console.log(error);
           
           
             const errorMessage =
               error?.response?.data?.message || "Something went wrong!";
           
             toast.error(errorMessage);
    }
    setLoading(false)
}


async function getSections() {

  try{
    const DATA  = {
      courseId: courseId
    }
    const result  = await getAllSections(DATA)
   if (result.data.success) {
      const fetchedSections = await Promise.all(
        result.data.AllSection.courseContent.map(async (section, i) => {
          let subSections = [];

          const res = await getSubSections({ sectionId: section._id });

          if (res.data.success) {
            subSections = res.data.subsections.map((sub) => ({
              _id: sub._id,
              title: sub.title,
            }));
          }

          return {
            _id: section._id,
            sectionName: section.sectionName,
            subSection: subSections,
            index: i + 1,
          };
        })
      );

      setSections(fetchedSections);
      setidx(fetchedSections.length);
    }
  }
  catch(error){
    console.log(error);
 const errorMessage =
 error?.response?.data?.message || "Something went wrong!";           
toast.error(errorMessage);
  }
  
}
useEffect(() => {
  if (step === 2) {
    getSections();
    setActive("");
  }
}, [step, courseId]);



return(
        <div>
         
             <div className="w-full flex items-center justify-start px-2 text-gray-400 cursor-pointer text-md mt-5 ">
                <button onClick={() =>{
                
                    setStep(0);
                }}>{`<`} Back to Courses</button>
            </div>
            <div>           
                 <div className="w-10/12 flex justify-center  mx-auto items-center mt-5">
            <div className="flex flex-col gap-y-1 justify-center items-center ">
             <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full  border bg-yellow-300 border-yellow-300"><img className="object-contain w-[20px]" src={tick} alt="" /></div>
            
             </div>
             <div className=" sm:w-[180px] w-[20px] border-t  border-dashed border-yellow-300"></div>
             <div className="flex flex-col gap-y-1 justify-center items-center">
             <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-gray-500 border bg-gray-800 border-gray-500">2</div>
          
             </div>
            <div className="sm:w-[180px] w-[20px] border-t border-dashed border-white"></div>
             <div className="flex flex-col gap-y-1 justify-center items-center ">
             <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-gray-500 border bg-gray-800 border-gray-500">3</div>
            
             </div>
            </div>
        </div>
            
            <h1 className="text-white text-2xl font-bold text-center">Course Builder</h1>

          <div className="sm:w-7/12 w-10/12 mx-auto border border-gray-500 bg-gray-900 rounded-md px-5 py-5 mb-5 mt-5">
             
             <ul className="mx-auto w-full flex flex-col gap-y-3 mb-5">
                {
                    sections.map((section) => (
                       
                        <li className="text-white text-md w-full mx-auto"><div className="bg-gray-800 w-full rounded-md px-2 py-2 flex flex-col gap-y-2 items-start">
                             <div className="flex w-full mx-auto justify-center items-center z-50">
                             <SubSectionCard section={section} activeSubsection={activeSubsection} setSubsection={setSubsection}  setSections={setSections} activeSection={activeSection} setActive={setActive}></SubSectionCard>
                                         </div>
                            <div className="flex w-full justify-between border-b border-gray-500  item-center px-2">
                                <div className="flex gap-x-1">
                                 <img className="w-[15px] invert object-contain" src={book} alt="" />
                            <h1 className="text-gray-400 md:text-sm text-[10px] font-bold">{section.sectionName}</h1></div>
                            <div className="flex gap-x-1">
                                <img onClick={() => setEdit(section._id)} className="md:w-[15px] w-[8px] invert object-contain cursor-pointer" src={pen} alt="" />
                                <img onClick={() => sectionDelete(section._id)} className="md:w-[15px] w-[8px] invert object-contain cursor-pointer" src={del} alt="" />
                            </div>
                            </div>
                            <div  className="flex gap-x-1">
                            <input className={`bg-gray-600 text-white text-xs px-1 py-1 rounded-md ${Edit!==section._id?"hidden":""} `}  onChange={newNameHandler} type="text" placeholder="New Name" name="newName" id="newName" value={newName} />
                            <button onClick={() => sectionUpdate(section._id)}  className={`rounded-md px-1 py-1 text-xs bg-gray-950 text-white text-center ${Edit!==section._id?"hidden":""} `}>Save</button>
                           </div>
                           <ul className="mx-auto w-10/12 flex flex-col  gap-y-3 mb-5">
                            {
                               section.subSection.map((subsection) => (
                                <li className="text-white text-md w-full mx-auto">
                                      <div className="flex w-full justify-between item-center px-2">
                                <div className="flex gap-x-1">
                                 <img className="md:w-[15px] w-[8px] invert object-contain" src={paper} alt="" />
                            <h1 className="text-gray-400 md:text-xs text-[10px] font-bold">{subsection.title}</h1></div>
                            <div className="flex gap-x-1">
                                <img onClick={() => {setSubsection(subsection._id),setActive(section._id) }} className="md:w-[15px] w-[10px] invert object-contain cursor-pointer" src={pen} alt="" />
                                <img onClick={() => SubsectionDelete(section._id , subsection._id)}  className="md:w-[15px] w-[10px] invert object-contain cursor-pointer" src={del} alt="" />
                            </div>
                            </div>
                                </li>
                               ))
                            }
                           </ul>
                          <button onClick={() => {
                            setActive(section._id)
                          }} className="bg-yellow-300 md:text-[10px] text-[8px] font-bold px-1 text-black py-1 text-center rounded-md cursor-pointer hover:brightness-95">Add SubSection</button>
                            
                            </div></li>
                    ))
                }  
             </ul>
              
              <div className="md:w-11/12 mx-auto flex flex-col justify-evenly gap-y-5">
              <input onChange={changeHandler} required className="w-full py-1 bg-gray-500 text-white px-2 rounded-md text-md"  type="text" placeholder="Add the Section Name" name="sectionName" id="sectionName" value={sec}  />         
              </div>

              <button onClick={sectionHandler} className=" text-xs flex justify-center bg-yellow-400 text-black cursor-pointer hover:scale-95 transition duration-300 items-center px-2 py-1 rounded-md mt-3 gap-x-1"> <img className="w-[10px] object-contain "  src={add} alt="" /> Create Section</button>
          
          </div>

          <div className="w-10/12 mx-auto flex justify-center items-center mt-5 mb-5">
                        <button onClick={() => setStep(3)} className="px-2 py-1 rounded-md bg-yellow-300 text-xs font-bold text-black cursor-pointer hover:scale-95">Save and Next </button>
          </div>

        </div>
    )
}

export default Card