import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { getAllCategories, getAllCourses } from "../../../services/ApiInstance";
import Card from "./CourseCard";
import "./Scrollbar.css"

function Section (){

    const {category} = useParams();
     const[idx , setIndex] = useState(1)  
    const [currentCategory , setCategory] = useState({})
    const [allCourses , setAllCourses] = useState([])
     async function AllCategories() {
        
        try{
            const result  = await getAllCategories();
             setCategory(
                result.data.response.filter((cat) => cat.name === category )[0]
             )
        }
        catch(error){
           console.log(error)
        }
     }
    
     async function AllCourses() {

        try{
            const result  = await getAllCourses();
            if(result.data.success){
            setAllCourses(
                result.data.allCourses
            )
            }
        }
        catch(error){
            console.log(error)
        }
        
     }

     useEffect(() => {
        AllCategories(),
        AllCourses()
     } , [category])

    return(
        
        <div className="w-full pt-12 ">
            <div className="w-full bg-gray-800 py-5">
                <div className="w-10/12 mx-auto flex md:flex-row flex-col gap-y-2 gap-x-2 justify-evenly">
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-sm text-gray-500 ">Home / Catalogue / <span className="text-yellow-300">{category}</span> </h1>
                        <h1 className="text-2xl font-bold text-white">{category}</h1>
                        <p className="text-gray-500">{currentCategory.description}</p>
                    </div>
                    <div>
                        <h1 className="md:min-w-[150px] text-md font-bold text-white">Related Resources</h1>
                        <ul  className="text-xs text-gray-500 space-y-1">
                            <li className="cursor-pointer hover:brightness-140">Cheatsheets</li>
                            <li className="cursor-pointer hover:brightness-140">Articles</li>
                            <li className="cursor-pointer hover:brightness-140">Community Forums</li>
                            <li className="cursor-pointer hover:brightness-140">Projects</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="py-5 w-full bg-[rgb(3,1,29)] ">
                <div className="w-10/12 mx-auto">
                <h1 className="text-white text-xl font-bold text-left " >Courses to get you started</h1>

                <div className="flex flex-row justify-start gap-x-3 items-center border-b border-gray-400 py-1 ">
                    <button onClick={() => setIndex(1)} className={`text-sm text-gray-600 cursor-pointer ${idx===1 ? "text-yellow-500 font-bold ":""} `}>Most Popular</button>
                    <button onClick={() => setIndex(2)} className={`text-sm text-gray-600 cursor-pointer ${idx===2 ? "text-yellow-500 font-bold ":""} `}>New</button>
                    <button onClick={() => setIndex(3)} className={`text-sm text-gray-600 cursor-pointer ${idx===3 ? "text-yellow-500 font-bold ":""} `}>Trending</button>
                </div>
                <div className="flex flex-row   justify-between gap-x-10 py-10  gap-y-5 mt-5 items-center overflow-x-auto overflow-y-hidden custom-scrollbar snap-x snap-mandatory">
                     {
                        allCourses.map((course) => (
                           <Card course={course}></Card> 
                        ))
                     }
                </div>
               
               <h1 className="text-white text-xl font-bold text-left mt-5" >Top Courses in {category}</h1>
                <div className="flex flex-row   justify-between gap-x-5 py-10  gap-y-5 mt-5 items-center overflow-x-auto overflow-y-hidden custom-scrollbar-2 snap-x snap-mandatory">
                     {
                        allCourses.map((course) => (
                           <Card course={course}></Card> 
                        ))
                     }
                </div>
                </div>

            </div>

        </div>
    )
}


export default Section