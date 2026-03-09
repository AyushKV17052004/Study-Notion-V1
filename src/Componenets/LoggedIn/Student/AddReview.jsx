import close from "../../../assets/cross.png"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { getProfile, rateCourse } from "../../../services/ApiInstance";
import { toast } from "react-toastify";
function Card({ReviewPopup , setReviewPopup} ){

    const {courseId} = useParams()
    const [Data , setData] = useState({rating:0 , review:"" , courseId:courseId})
    const [loading , setLoading] = useState(false);
    //   const [rating, setRating] = useState(0);
      const [Profile , setProfile] = useState(null)
function ratingHandler(newRating) {
  setData(prev => ({
    ...prev,
    rating: newRating
  }));
}

    function changeHandler(event){
    const{name , value , type, checked } = event.target;
    setData(prev=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }
      async function GetProfile() {
        try{
           const result = await getProfile();
           if(result.data.success){
              setProfile(result.data.user)
           }
        }
        catch(error){
            console.log(error)
        }
      }
    async function  SubmitHandler(event){
        event.preventDefault();
        if(loading)
            return;

        setLoading(true)
        try{
            const result  = await rateCourse(Data);
            if(result.data.success){
                toast.success("Review Added Successfully")
            }

        }
        catch(error){
            console.log(error);
              const errorMessage =
                    error?.response?.data?.message || "Something went wrong";
                
                  toast.error(errorMessage);
        }
        finally{
            setLoading(false)
            setReviewPopup(false);
        }
    }
      useEffect(()=>{
       if(ReviewPopup === true){
        GetProfile()
       } 
      }, [ReviewPopup])


    return(
        <div className= {` md:w-[400px] w-[200px] max-[300px]:w-[120px] self-start mx-auto bg-gray-800 flex flex-col justify-evenly items-center fixed top-[50%] z-50  ${ReviewPopup === true?"":" hidden"} `}>
          <div className="px-2 w-full bg-gray-600 border-b-white border py-1 flex justify-between items-center">
              <h1 className="text-sm font-bold text-white">Add Review</h1>
              <img onClick={() => setReviewPopup(false)} className="w-[20px] cursor-pointer object-contain" src={close} alt="" />
          </div>
          <div className="py-2 w-11/12 mx-auto flex flex-col justify-evenly gap-y-2 items-center">
            <div className="flex gap-x-1 items-center">
                <img className="w-[30px] h-[30px] object-cover rounded-full" src={Profile?.imgURL} alt="" />
                <h1 className="text-xs font-bold text-white capitalize">{Profile?.firstName} {Profile?.lastName} </h1>
            </div>
              <ReactStars
        count={5}
        value={Data.rating}      // controlled value (1–5)
        onChange={ratingHandler} // input handler
        size={24}
        isHalf={true}
        activeColor="#facc15"
      />


            
            <form onSubmit={SubmitHandler} className="w-full mx-auto">
                <div className="w-full "> 
                    <label className="text-white text-xs" htmlFor="Review">Add Your Experience <span className="text-red-500">*</span></label>
                    <br />
                    <textarea onChange={changeHandler} name="review" value={Data.review} id="Review" placeholder="Share Your experience with this Course" className="w-full bg-gray-400 text-gray-900 rounded-md px-2 py-2"></textarea>

                </div>
                <div className="flex max-[300px]:flex-col gap-y-1 gap-x-1 justify-end items-center mt-2">
                    <h1  onClick={() => setReviewPopup(false)} className="select-none text-white text-xs  bg-black rounded-md px-3 py-[5px] cursor-pointer hover:scale-90">Cancel</h1>
                    <button type="submit" className="text-black bg-yellow-500 text-xs rounded-md px-2 py-1 cursor-pointer hover:scale-90">{`${loading === true ? 'Saving...':'Save Review'}`} </button>
                </div>
            </form>

          </div>
        </div>
    )
}

export default Card