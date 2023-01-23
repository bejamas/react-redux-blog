import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPost } from "../../typings";

const initialState: IPost[] = [];

export const postSlice = createSlice({
    name: 'all-posts',
    initialState: initialState,
    reducers: {
        saveBlogPost: (state, actions:{payload:IPost}) => {
            state.push(actions.payload);
        }
    }
})

export const selectAllPosts = (state: RootState) => state.posts;

export const { saveBlogPost } = postSlice.actions;

export default postSlice.reducer;