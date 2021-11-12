import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    notification: null,
    dropdown:false,
   
};


const UiSlice = createSlice({
    name:'ui',
    initialState,
    reducers: {
        setNotification(state, action) {
            state.notification = action.payload;
        },
        clearNotification(state) {
            state.notification = null;
        },
        toggleDropDown(state) {
            state.dropdown = !state.dropdown;
        },
    }
});

export const UiActions = UiSlice.actions;
export default UiSlice.reducer;