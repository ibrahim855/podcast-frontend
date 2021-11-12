import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    podcasts: [],
};

const PodcastSlice = createSlice({
    name:'podcast',
    initialState,
    reducers: {
        setPodcasts(state, action) {
            state.podcasts  = action.payload;
        },
        addPodcast(state, action) {
            state.podcasts.push(action.payload);
        },
        removePodcast(state, action) {
            const index = state.podcasts.findIndex(podcast => podcast.podcastId === action.payload);
            state.podcasts.splice(index, 1);
        }
    }
});

export const PodcastActions = PodcastSlice.actions;
export default PodcastSlice.reducer;