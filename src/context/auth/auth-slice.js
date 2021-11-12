import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    username:"",
    token:null,
    isLoggedIn:false,
};

const AuthSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        login(state, action) {
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
        }
    }
});


export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;