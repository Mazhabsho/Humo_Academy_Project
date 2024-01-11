import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    navList: ['/home', '/about','/service']
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setNav:(state, {payload}) =>{
            state.navList = payload
        }
    }
})

export const {setNav} = navSlice.actions