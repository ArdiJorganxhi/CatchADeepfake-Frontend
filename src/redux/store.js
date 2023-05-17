import { configureStore } from "@reduxjs/toolkit";
import isRealSlice from "./slices/isRealSlice";


export default configureStore({
    reducer: {
        isReal: isRealSlice
    },
})