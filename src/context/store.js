import { configureStore } from '@reduxjs/toolkit';


//SLICES
import AuthReducer from './auth/auth-slice';
import UiReducer from './ui/ui-slice';
import PodcastReducer from './podcast/podcast-slice';

const store = configureStore({
    reducer: {  
        authentication: AuthReducer,
        ui: UiReducer,
        podcast:PodcastReducer
    }
});

export default store;