import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Reduxstate"

export const store = configureStore({
    reducer: {
        myReducer,
    }
})