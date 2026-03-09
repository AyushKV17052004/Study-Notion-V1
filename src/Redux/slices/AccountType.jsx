import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   accountType: localStorage.getItem("accountType")? JSON.parse(localStorage.getItem("accountType")) : "Student",
   userID: localStorage.getItem("userID")? JSON.parse(localStorage.getItem("userID")) : null 
}
export const accountSlicer  = createSlice(
   {
    name:"account",
    initialState,
    reducers:{
        setAccount: (state , value) =>{
            state.accountType = value.payload
            localStorage.setItem("accountType", JSON.stringify(value.payload));
        },
         removeAccount: (state) =>{
            state.accountType = null
            localStorage.removeItem("accountType");
        },
        setID: (state , value) =>{
            state.userID = value.payload
            localStorage.setItem("userID", JSON.stringify(value.payload)); 
        },
          removeID: (state) =>{
            state.userID = null
            localStorage.removeItem("userID");
        },
      
    }
   }

)

export const {setAccount , removeAccount , setID , removeID} = accountSlicer.actions
export default accountSlicer.reducer