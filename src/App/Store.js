import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Authentication/authSlice.js";



const store = configureStore({
    reducer: {
        auth : authReducer,
    },
});

export default store;