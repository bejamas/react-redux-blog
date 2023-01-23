import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPost } from "../../typings";

const initialState: IPost = {
  id: 0,
  title: "",
  content: "",
  voteCount: 0,
  isFavorite: false,
};

export const currentPostSlice = createSlice({
  name: "current-post",
  initialState: initialState,
  reducers: {
    setCurrentPost: (state, action:{payload:IPost}) => {
      state = action.payload;
      return state
    },
  },
});

export const { setCurrentPost } = currentPostSlice.actions;

export const selectCurrentPost = (state: RootState) => state.currentPost;

export default currentPostSlice.reducer;