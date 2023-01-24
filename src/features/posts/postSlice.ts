import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPost } from "../../typings";

const initialState: IPost[] = [];

export const postSlice = createSlice({
  name: "all-posts",
  initialState: initialState,
  reducers: {
    saveBlogPost: (state, actions: { payload: IPost }) => {
      state.push(actions.payload);
    },
    upvotePost: (state, actions: { payload: number }) => {
      return state.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount + 1 };
        }
        return post;
      });
    },
    downvotePost: (state, actions: { payload: number }) => {
      return state.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount - 1 };
        }
        return post;
      });
    },
    toggleFavorite: (state, actions: { payload: number }) => {
      return state.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, isFavorite: !post.isFavorite };
        }
        return post;
      });
    },
    updateBlogPost: (
      state,
      actions: { payload: { id: number; content: string; title: string } }
    ) => {
      return state.map((post) => {
        if (post.id === actions.payload.id) {
          return {
            ...post,
            title: actions.payload.title,
            content: actions.payload.content,
          };
        }
        return post;
      });
    },
    deletePost: (state, actions: { payload: number }) => {
      return state.filter((post) => {
        return post.id !== actions.payload;
      });
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const {
  saveBlogPost,
  upvotePost,
  downvotePost,
  toggleFavorite,
  updateBlogPost,
  deletePost,
} = postSlice.actions;

export const selectAllFavoritePosts = (state: RootState) =>
  state.posts.filter((post) => {
    return post.isFavorite === true;
  });

export default postSlice.reducer;
