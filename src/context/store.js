import { configureStore } from '@reduxjs/toolkit';


//SLICES
import AuthReducer from './auth/auth-slice';
import UiReducer from './ui/ui-slice';

const store = configureStore({
    reducer: {  
        authentication: AuthReducer,
        ui: UiReducer
    }
});

export default store;