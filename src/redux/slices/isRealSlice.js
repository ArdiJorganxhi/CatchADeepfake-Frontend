import { createSlice } from "@reduxjs/toolkit";


export const isRealSlice = createSlice({
    name: 'isReal',
    initialState: {
        value: false
    },
    reducers: {
        real: (state) => {
            state.value = true
        },
        fake: (state) => {
            state.value = false
        }
    }

})

export const { real, fake } = isRealSlice.actions

export default isRealSlice.reducer