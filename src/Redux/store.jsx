import { configureStore } from "@reduxjs/toolkit";

import  NavbarReducer from "./slices/NavbarSlice";
import accountReducer from "./slices/AccountType"
import authReducer from "./slices/auth"
import cartReducer from "./slices/Cart"
export const store = configureStore(
    {
        reducer:{
        
            Navbar: NavbarReducer,
            auth: authReducer,
            account: accountReducer,
            Cart: cartReducer

        },
    }
)