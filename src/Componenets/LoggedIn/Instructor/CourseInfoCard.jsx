import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { createCourse } from "../../../services/ApiInstance";
import { toast } from "react-toastify";
import uploadImg from "../../../assets/image-upload.png"
import tick from "../../../assets/mark.png"
function Card({setStep , setCourseId}){
    const navigate = useNavigate();


    const [DATA ,setData] = useState({courseName:"" , courseDescription:"" , Tags:"" ,price:"" , whatYouWillLearn:"" ,category:"" ,instructions:"" , thumbnailUrl:null})
  const [loading , setLoading] = useState(false);
   function changeHandler(event){
    const{name , value , type, checked } = event.target;
    setData(prev=>{
      return{
        ...prev,
        [name]: type==="checkbox"?checked:value
      }
    })
  }

function imageChangeHandler(e) {
  const originalFile = e.target.files[0];
  if (!originalFile) return;

  const img = new Image();
  img.src = URL.createObjectURL(originalFile);

  img.onload = () => {
    const TARGET_WIDTH = 1024;
    const TARGET_HEIGHT = 576;
    const TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT;

    const imgRatio = img.width / img.height;

    let cropWidth, cropHeight, cropX, cropY;

    if (imgRatio > TARGET_RATIO) {
      cropHeight = img.height;
      cropWidth = img.height * TARGET_RATIO;
      cropX = (img.width - cropWidth) / 2;
      cropY = 0;
    } else {
      cropWidth = img.width;
      cropHeight = img.width / TARGET_RATIO;
      cropX = 0;
      cropY = (img.height - cropHeight) / 2;
    }

    const canvas = document.createElement("canvas");
    canvas.width = TARGET_WIDTH;
    canvas.height = TARGET_HEIGHT;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      img,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      TARGET_WIDTH,
      TARGET_HEIGHT
    );

    canvas.toBlob(
      (blob) => {
        if (!blob) return;

        const processedFile = new File(
          [blob],
          originalFile.name,
          { type: "image/jpeg" }
        );

        setData(prev => ({
          ...prev,
          thumbnailUrl: processedFile
        }));
        toast.success("Image Uploaded successfully")

      },
      "image/jpeg",
      0.9
    );
  };

}



async function courseCreate(event){
    event.preventDefault();
    if(loading){
      return;
    }
    setLoading(true)

    try{
        const result = await createCourse(DATA);

        if(result.data.success){
            toast.success("Course Drafted Successfully")
            setCourseId(result.data.courseResponse._id)
            setStep(2)
            

        }
    }
    catch(error){
         console.log(error);
           
           
             const errorMessage =
               error?.response?.data?.message || "Something went wrong!";
           
             toast.error(errorMessage);

    }
    finally{
    setLoading(false);
    setData({courseName:"" , courseDescription:"" , Tags:"" ,price:"" , whatYouWillLearn:"" ,category:"" ,instructions:"" , thumbnailUrl:null});
    }
}





    return(
        <div>
            <div className="w-full flex items-center justify-start px-2 text-gray-600 text-md">
                <button onClick={() =>{
                
                    setStep(0)
                    
                }}>{`<`} Back to Courses</button>
            </div>
            <div>           
                 <div className="w-10/12 flex justify-center  mx-auto items-center">
            <div className="flex flex-col gap-y-1 justify-center items-center ">
             <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-yellow-400 border bg-black/15 border-yellow-300">1</div>
            
             </div>
             <div className=" sm:w-[180px] w-[20px] border-t border-dashed border-white"></div>
             <div className="flex flex-col gap-y-1 justify-center items-center">
             <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-gray-500 border bg-gray-800 border-gray-500">2</div>
          
             </div>
            <div className="sm:w-[180px] w-[20px] border-t border-dashed border-white"></div>
             <div className="flex flex-col gap-y-1 justify-center items-center ">
             <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-gray-500 border bg-gray-800 border-gray-500">3</div>
            
             </div>
            </div>
              
            
             <h1 className="text-center text-white text-lg font-bold mt-5">Course Information</h1>  
         

            </div>

             
             <div className="sm:w-7/12 w-10/12 mx-auto border border-gray-500 bg-gray-900 rounded-md px-5 py-5 mb-5 mt-5">
                <form onSubmit={courseCreate} className="md:w-11/12 mx-auto flex flex-col justify-evenly gap-y-5">

                <div>
                    <label className="text-white text-sm" htmlFor="title">Course Title <span className="text-red-500">*</span></label>
                    <br />
                    <input onChange={changeHandler} required className="w-full py-1 bg-gray-500 text-white px-2 rounded-md text-md" type="text" placeholder="Enter Course Title" id="title" name="courseName" value={DATA.courseName} />
                </div>
                <div>
                    <label className="text-white text-sm" htmlFor="description">Course Description <span className="text-red-500">*</span></label>
                    <br />
                    <textarea onChange={changeHandler} required className= "w-full py-1 bg-gray-500 text-white px-2 rounded-md text-md" placeholder="Enter Course Description" name="courseDescription" value={DATA.courseDescription} id="description"></textarea>
                </div>
                <div>
                    <label className="text-white text-sm" htmlFor="Price">Course Price <span className="text-red-500">*</span></label>
                    <br />
                    <input onChange={changeHandler} required className="w-full py-1 bg-gray-500 text-white px-2 rounded-md text-md" type="number" placeholder=" ₹ Enter Price" value={DATA.price} id="Price" name="price" />
                </div>

                <div>
                    <label className="text-white text-sm" htmlFor="category">Choose Category <span className="text-red">*</span></label>
                    <br />
                    <select onChange={changeHandler}  className= "w-full py-1 bg-gray-500 text-white px-2 rounded-md text-sm" value={DATA.category} name="category" id="category">
                        <option value="">Select Category</option>
                        <option value="WebDev">WebDev</option>
                        <option value="Python">Python</option>
                        <option value="DevOps">DevOps</option>
                        <option value="AI|ML">AI|ML</option>
                        <option value="Operating System">Operating System</option>
                    </select>
                </div>

                <div>
                    <label  className="text-white text-sm" htmlFor="Tags">Course Tags <span className="text-red-500">*</span></label>
                    <br />
                    <input onChange={changeHandler} required className="w-full py-1 text-md bg-gray-500 text-white px-2 rounded-md " value={DATA.Tags} type="text" placeholder=" Enter Tags" id="Tags" name="Tags" />
                </div>
                 
                 <div>
                    <h1 className="text-sm text-white">Course Thumbnail <span className="text-red">*</span></h1>
                    <input onChange={imageChangeHandler} accept="image/*"  type="file" id="thumbnailUrl" name="thumbnailUrl" hidden />
                    <br />
                    <label className="flex  justify-center text-sm items-center border border-white rounded-lg bg-gray-900 w-full px-3 text-white py-5 cursor-pointer" htmlFor="thumbnailUrl">{DATA.thumbnailUrl ? <div className="flex flex-col justify-center items-center">

                      <img className="w-[50px] object-contain" src={tick} alt="" />
                      <h1 className="text-gray-600 text-sm text-center">Image Uploaded Successfully</h1>
                      <h1 className="text-red-600">Click Again to upload New Image</h1>
                    </div> : <div className="flex flex-col justify-center items-center gap-y-3">

                     <img className="w-[30px] object-contain" src={uploadImg} alt="" />
                     <h1 className="text-gray-600 text-sm text-center"><span className="text-yellow-300">Browse</span> image from your local device or <span className="text-blue-400">Drop</span> it directly here.</h1>
                     <h1 className="text-gray-500 text-sm">Max Image Size - 6MB each</h1>
                     <h1 className="text-sm text-center text-gray-600"> <span className="text-red-500">*</span>Aspect Ratio - 16:9</h1>

                    </div>}
                     </label>

                 </div>
                
                <div>
                    <label className="text-white text-sm" htmlFor="benefits">Course Benefits <span className="text-red-500">*</span></label>
                    <br />
                    <textarea onChange={changeHandler} required className= "w-full py-1 bg-gray-500 text-white px-2 rounded-md text-md" placeholder="Enter Course Benefits" id="benefits" value={DATA.whatYouWillLearn} name="whatYouWillLearn"></textarea>
                </div>
                <div>
                    <label className="text-white text-sm" htmlFor="Instructions">Course Instructions <span className="text-red-500">*</span></label>
                    <br />
                    <input onChange={changeHandler} required className="w-full py-1 bg-gray-500 text-white px-2 rounded-md text-md" type="text" placeholder="Enter Course Instructions" value={DATA.instructions} id="Instructions" name="instructions" />
                </div>

                <button   className="text-black cursor-pointer text-sm rounded-md transition duration-200 hover:scale-95 font-bold px-2 py-1 bg-yellow-400" type="submit"> {`${loading===true?'Creating Course....':'Create Course'}`} </button>

                </form>
             </div>


        </div>
    )
}

export default Card