import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   Menu: false
}
export const MenuSlicer  = createSlice(
   {
    name:"Navbar",
    initialState,
    reducers:{
        showMenu: (state) =>{
            state.Menu = true
        },
         hideMenu: (state) =>{
            state.Menu = false
        },
      
    }
   }

)

export const {showMenu , hideMenu} = MenuSlicer.actions
export default MenuSlicer.reducer