import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/ApiInstance";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Card (){

    const navigate = useNavigate()
    const token = useSelector((state) => (state.auth.token));
    const accountType = useSelector((state) => (state.account.accountType))
  const [Category , setCategory] = useState([])

async function AllCategory() {
    
    try{
        const result = await getAllCategories();
        if(result.data.success){
            setCategory(result.data.response)
        }
    }
    catch(error){
        console.log(error);
    }


}

useEffect(() => {
    AllCategory();
}, [])

    return(
        <div className="min-w-[140px] h-full bg-white  px-1 py-2 flex flex-col justify-evenly items-start rounded-md">
            {
                Category.map((cat )=> { return(
                    <h1 onClick={() => {
                        
                        if(token!=null ){
                            navigate(`/Student/Catalogue/${cat.name}`)
                        }
                        else
                        navigate(`/Catalogue/${cat.name}`)
                    
                    }} className="text-black text-xs font-bold cursor-pointer rounded-sm px-1 hover:bg-gray-400 mt-1">{cat.name}</h1>
                )})
            }
        </div>
    )
}

export default Card