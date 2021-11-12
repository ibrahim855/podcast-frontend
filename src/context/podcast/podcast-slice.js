import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  podcasts: [],
};

const PodcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setPodcasts(state, action) {
      state.podcasts = action.payload;
    },
    addPodcast(state, action) {
      state.podcasts.push(action.payload);
    },
    removePodcast(state, action) {
      const index = state.podcasts.findIndex(
        (podcast) => podcast.podcastId === action.payload
      );
      state.podcasts.splice(index, 1);
    },
    like(state, action) {
      const { id, action: liked } = action.payload;
        
      const podcastIndex = state.podcasts.findIndex(
        (podcast) => podcast.podcastId === id
      );

      if (liked) {
        state.podcasts[podcastIndex].likeCount++;
      } else {
        state.podcasts[podcastIndex].likeCount--;
      }
      
    },
  },
});

export const PodcastActions = PodcastSlice.actions;
export default PodcastSlice.reducer;
