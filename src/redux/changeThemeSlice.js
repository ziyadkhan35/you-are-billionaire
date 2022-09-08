import {createSlice} from '@reduxjs/toolkit'

export const changeThemeSlice = createSlice({
    name: 'dark',
    initialState:{
        dark:true
    },
    reducers:{
        setTheme:state=>{
            state.dark=!state.dark
        }
    }
})

export const {setTheme} = changeThemeSlice.actions
export default changeThemeSlice.reducer