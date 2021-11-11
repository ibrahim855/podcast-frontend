import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    token:null,
    isLoggedIn:false
};

const AuthSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        login(state, action) {
            state.token = action.payload;
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