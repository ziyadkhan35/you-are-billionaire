import { createSlice } from "@reduxjs/toolkit/";

const moneySlice=createSlice({
    name:'money',
    initialState:{
        amount:100000000000
    },
    reducers:{

    }
})

export default moneySlice.reducer