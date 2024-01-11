import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from "./features/navbar/NavbarSlice";


export const store = configureStore({
    reducer: {
        nav: navSlice.reducer
    }
})