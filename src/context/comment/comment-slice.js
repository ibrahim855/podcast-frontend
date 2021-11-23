import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, actions) {
      state.comments = [...actions.payload];
    },
    addComment(state, action) {
      state.comments.push(action.payload);
    },
    removeComment(state, action) {
      const index = state.comments.findIndex(
        (comment) => comment.commentId === action.payload
      );
      state.comments.splice(index, 1);
    },

    clearComments(state) {
      state.comments = [];
    },
  },
});

export const CommentActions = CommentSlice.actions;
export default CommentSlice.reducer;
