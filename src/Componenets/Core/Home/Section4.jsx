import { useEffect, useState } from "react"
import data1 from "../../../Data/data1"
import Card from "./Card"
import { useNavigate } from "react-router-dom"
import arrow from "../../../assets/arrow.png"
function Section4 (){

    const [tag , setTag] = useState("free");
    const [Id , setId] = useState(1);
     const navigate = useNavigate()

 useEffect(() => {
  setId(data1[tag][0].id); 
}, [tag]);
    function freeHandler(){
        setTag("free")
    }
    function popularHandler(){
        setTag("popular")
    }
    function skillHandler(){
        setTag("skillsPaths")
    }
    function careerHandler(){
        setTag("careerPaths")
    }
    function newHandler(){
        setTag("newToCoding")
    }
   






    return(
        <div className="w-full  flex flex-col items-center bg-[rgb(3,1,29)] pb-5">
          <div className="max-w-[500px] mx-auto flex flex-col gap-y-5 mb-10 justify-center items-center">
            <h1 className="sm:text-4xl text-xl text-white font-bold   ">Unlock the <span className="text-blue-500">Power of Course</span></h1>
            <p className="text-md font-bold text-gray-400 text-center">Learn to build anything you can imagine</p>
          </div>
          <div className="w-full flex flex-col gap-y-5">

           <div className="flex flex-row px-2 py-1 border-b-gray-400 border-1 bg-gray-900 rounded-4xl w-fit mx-auto justify-evenly max-[700px]:hidden ">
            <button onClick={freeHandler} className={`px-5 cursor-pointer py-1 text-gray-500 text-lg hover:rounded-4xl hover:bg-black ${tag==='free'?"rounded-4xl bg-black text-orange-400":""} `}>Free</button>
            <button onClick={newHandler} className={`px-5 cursor-pointer py-1 text-gray-500 text-lg hover:rounded-4xl hover:bg-black ${tag==='newToCoding'?"rounded-4xl bg-black text-orange-400":""}`}>New to Coding</button>
            <button onClick={popularHandler} className={`px-5 cursor-pointer py-1 text-gray-500 text-lg hover:rounded-4xl hover:bg-black ${tag==='popular'?"rounded-4xl bg-black text-orange-400":""}`}>Most Popular</button>
            <button onClick={skillHandler} className={`px-5 cursor-pointer py-1 text-gray-500 text-lg hover:rounded-4xl hover:bg-black ${tag==='skillsPaths'?"rounded-4xl bg-black text-orange-400":""}`}>Skills Paths</button>
            <button onClick={careerHandler} className={`px-5 cursor-pointer py-1 text-gray-500 text-lg hover:rounded-4xl hover:bg-black ${tag==='careerPaths'?"rounded-4xl bg-black text-orange-400":""}`}>Career Paths</button>
           </div>

           <div className="w-full z-20  mx-auto gap-x-5 gap-y-10 flex flex-row justify-evenly items-center px-5 mt-5 flex-wrap">
             {
                data1[tag].map((Data) => (
                    <Card setId = {setId}
                     Data={Data} Id = {Id}></Card>
                ))
             }
            

          </div>
           <div className="w-11/12 mx-auto flex justify-center items-center gap-x-5 mt-5"> 
                <button onClick={() => {
                        navigate("/Signup")
                    }} className="px-5 bg-yellow-400 py-[4.8px] rounded-md hover:scale-90 transition duration-500 flex flex-row text-center font-bold cursor-pointer">Explore Full Catalogue<img className="ml-2 object-contain w-[30px] relative bottom-[2px]" src={arrow} alt="" /></button>
                 <button onClick={() => {
                        navigate("/Signup")
                    }} className="px-5 text-white bg-gray-800 py-2 rounded-md hover:scale-90 transition duration-500 cursor-pointer">Learn More </button>
           </div>

    </div>

        </div>
    )
}

export default Section4