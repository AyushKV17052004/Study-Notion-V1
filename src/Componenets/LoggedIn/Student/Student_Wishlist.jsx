import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { GetCourse, purchaseCourse } from "../../../services/ApiInstance";
import CourseCard from "./CourseCard"
import { removeCourse } from "../../../Redux/slices/Cart";
import { toast } from "react-toastify";
function Card(){
   const [totalCourses , setCourses] = useState([])
  const AllCourses  = useSelector((state) => (state.Cart.Courses))
   const dispatch = useDispatch()

  const [Checkout , setCheckout] = useState(false);
  const [loading , setLoading] = useState(false)


  async function CoursePurchase() {
     if(loading)
        return;

     setLoading(true);
    try{
        
        for(const course of AllCourses){
            const Data = {
                courseId: course
            }
            const res = await purchaseCourse(Data);
            if(res.data.success){
             dispatch(removeCourse(course));
            }
            else{
                toast.error(res.data.message);
                setLoading(false)
                break;
            }
        }
   
        if(loading === false){
            return;
        }

        else{
            toast.success("Courses Purchased Successfully")
            PriceCalculator()
            TotalCourses()
             
            
        }


    }
    catch(error){
        console.log(error)
         const errorMessage =
 error?.response?.data?.message || "Something went wrong!";           
toast.error(errorMessage);
    }
    finally{
        setLoading(false)
    }
  }

  async function TotalCourses() {
  try {
    const result = [];

    for (const courseId of AllCourses) {
      const res = await GetCourse({ courseId });
      result.push(res.data.Courses);
    }

    setCourses(result);
  } catch (error) {
    console.log(error);
  }
}
const [Price , setPrice] = useState(0);
function PriceCalculator() {
    let temp = 0;
    try{
      totalCourses.map((course) =>
      (temp += course.price)
    )
    setPrice(temp);

    }
    catch(error){
        console.log(error);

    }
}

useEffect(() => {
    if(AllCourses.length > 0)
    TotalCourses()
} , [AllCourses])

useEffect(() => {
    if(AllCourses.length>0){
        PriceCalculator()
    }
} , [AllCourses , totalCourses])



    return(
        <div>
          
            <div className=" justify-between items-center  w-full px-9 mx-auto">
            <div className="flex flex-col  py-2 justify-evenly  gap-y-2">
                <p className="text-gray-600 text-sm">Home / Dashboard / <span className="text-yellow-400 text-md">{`${Checkout===true?'Checkout':'Wishlist'} `}</span></p>
                {/* <h1 className="text-2xl  font-bold text-white">Wishlist</h1> */}
            </div>
            <div className="flex justify-start px-2 text-white text-xl font-bold">
                <h1>{`${Checkout===true?'Checkout':'My Wishlist'} `}</h1>
          
            </div>
            <div className="w-11/12 mx-auto flex flex-col justify-evenly gap-y-2 mt-5">
                <p className="text-xs text-gray-300 font-bold" >{AllCourses.length} Courses in Wishlist</p>
                 < hr className="text-white" />
                 <div className="flex justify-between items-start">
                 <div className="flex flex-col justify-evenly gap-y-2 mt-2 ">
                       
                       { AllCourses.length>0?
                        
                        totalCourses.map((course) => (
                            <CourseCard course={course}></CourseCard>
                        ))
                       :
                       <div className="flex items-center justify-center">
                         <h1 className="text-xl font-bold text-white">No Courses Found</h1>
                       </div>
}
                       
                 </div>
                 { Checkout===true?
                 <div className="flex flex-col rounded-md bg-gray-900  px-3 py-3">
                  <h1 className="text-md font-bold text-white">Payment Details</h1>
                  <p className="text-gray-500 text-left text-xs">Complete your purchase details items and provide details.</p>
                   <div className="px-2 my-5 py-1 w-11/12 mx-auto rounded-md border border-gray-400 flex flex-col justify-evenly gap-y-3">
                    <div className="mx-auto w-full ">
                        <label className="text-xs text-white" htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
                        <br />
                        <input className="w-full  px-2 py-1 bg-gray-700 rounded-md text-gray-300" type="text" placeholder="Enter Full Name"  />
                    </div>
                    <div>
                        <label className="text-xs text-white" htmlFor="Email">Email <span className="text-red-500">*</span></label>
                        <br />
                        <input className="w-full px-2 py-1 bg-gray-700 rounded-md text-gray-300" type="email" placeholder="Enter Email Id"  />
                    </div>
                    <hr className="text-gray-400 w-full" />
                    <div className="flex text-gray-400 text-sm justify-between">
                        <h1>Total:</h1>
                        <h1 >Rs. {Price}</h1>
                    </div>
                    <button onClick={CoursePurchase} className="bg-yellow-400 cursor-pointer w-10/12 hover:scale-95 rounded-md self-center lg:px-5 py-1 text-xs font-bold text-black">{`${loading === true?'Purchasing....':`Pay Rs. ${Price}`} `}</button>
                   </div>
                 </div>        
                 :<div className="bg-gray-900 px-2 py-5 flex flex-col md:w-[200px]  items-start rounded-md justify-evenly gap-y-2">
                    <h1 className="text-gray-600 text-sm font-bold">Total:</h1>
                    <h1 className="text-yellow-400 text-lg font-bold">Rs. {Price}</h1>
                    <button onClick={() => setCheckout(true)} className="bg-yellow-400 cursor-pointer w-10/12 hover:scale-95 rounded-md self-center lg:px-5 py-1 text-xs font-bold text-black">Buy Now</button>
                 </div>
}
                 </div>

            </div>
        </div>
        </div>
    )
}

export default Card