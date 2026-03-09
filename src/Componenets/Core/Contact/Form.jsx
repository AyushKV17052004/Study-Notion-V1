import { useState } from "react"
import { toast } from "react-toastify";

function NewForm(){
    

   const [Data , setData] = useState({firstName:"" , lastName:"" , email:"" , phoneNumber:"" , message:""})


     function changeHandler(event){
    const{name , value , type, checked } = event.target;
    setData(prev=>{
      return{
        ...prev,
        [name]: type==="checkbox"?checked:value
      }
    })
  }

   async function submitHandler(event){
    event.preventDefault();
    console.log("Sending Object");
    try {
          toast.success("Email Sent. Please Wait for Confirmation")    
    const res = await fetch("http://localhost:4000/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    
    const result = await res.json();
toast.success("Email Recieved by Admin Successfully") 
    console.log(result);
  } catch (err) {
    console.error("Error sending data:", err);
    toast.error("Unable to send Email right now , Try again Later")
  }
  }


   
    

    return(
        <div className="w-full bg-[rgb(3,1,29)] py-30">
            <div className="w-10/12  mx-auto border border-gray-500 rounded-md py-2 px-2 ">
               <h1 className="text-white text-2xl font-bold text-center">Got a Idea? We’ve got the skills. Let’s team up</h1>
               <p className="text-gray-600 text-md font-bold text-center">We'd love to here for you, Please fill out this form.</p>

               <form onSubmit={submitHandler} className="py-5">
              
               <div className="flex sm:flex-row flex-col justify-evenly items-center mx-auto w-10/12 ">
                <div className="w-full">
                <label className="text-lg text-white" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                <br />

                <input onChange={changeHandler} className="w-11/12 border-b border-gray-400 px-2 py-2 rounded-md text-gray-400 text-md bg-gray-800 " type="text" required name="firstName" value={Data.firstName} placeholder="Enter First Name"   id="firstName"></input>
                </div>
                <br />
                <div className="w-full" >
                 <label className="text-lg text-white" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                <br />
                <input onChange={changeHandler} className="w-11/12 border-b border-gray-400 px-2 py-2 rounded-md text-gray-400 text-md bg-gray-800 " type="text" required name="lastName" placeholder="Enter last Name"  value={Data.lastName}  id="lastName"></input>
                </div>
               </div>
               <br />
                  
                  <div className="w-10/12 mx-auto">
                <label className="text-lg text-white" htmlFor="email"> Email <span className="text-red-500">*</span></label>
                <br />
                <input onChange={changeHandler} className="w-24/25  border-b border-gray-400 px-2 py-2 rounded-md text-gray-400 text-md bg-gray-800 " type="email" required name="email" placeholder="Enter Email Address" value={Data.email}  id="email"></input>
                 </div>
                 <br />
                
                <div className="w-10/12 mx-auto">
                <label className="text-lg text-white" htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></label>
                <br />
                <input onChange={changeHandler} className="w-24/25 border-b border-gray-400 px-2 py-2 rounded-md text-gray-400 text-md bg-gray-800 " type="tel" id="phoneNumber" name="phoneNumber" placeholder="12345 67890" value={Data.phoneNumber}  required  />
                </div>
                <br />
                
                <div className="w-10/12 mx-auto">
                 <label className="text-lg text-white" htmlFor="message">Message<span className="text-red-500">*</span></label>
                <br />
                <textarea onChange={changeHandler} className="w-24/25 border-b border-gray-400 px-2 py-2 rounded-md text-gray-400 text-md bg-gray-800 " value={Data.message}  required name="message" placeholder="Enter your Message"   id="message"></textarea>
                 </div>
                 <br />
                
                <div className="w-10/12 mx-auto">
               <button  className=" w-24/25 px-3 py-2 text-lg font-bold text-black bg-yellow-300 rounded-md cursor-pointer hover:scale-90 transition duration-500">Send Message</button> 
                </div>
               </form>

            </div>
        </div>
    )
}

export default NewForm