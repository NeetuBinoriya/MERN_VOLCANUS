import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterslice/Index";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});