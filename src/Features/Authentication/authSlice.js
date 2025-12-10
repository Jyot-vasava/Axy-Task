import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  auth:{
    isAuthenticated: false,
    user: null,
    token: null,
  }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action) => {
            state.auth.isAuthenticated = true;
            state.auth.user = action.payload.user;
            state.auth.token = action.payload.token;
        },
        login: (state, action) => {
            state.auth.isAuthenticated = true;
            state.auth.user = action.payload.user;
            state.auth.token = action.payload.token;
        },      
        logout: (state) => {
            state.auth.isAuthenticated = false;
            state.auth.user = null;
            state.auth.token = null;
        },
        
    },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;