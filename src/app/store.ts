import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navigationReducer from '../features/posts/navigationSlice'
import postReducer from "../features/posts/postSlice";
import currentPostReducer from "../features/posts/currentPostSlice";
export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    posts: postReducer,
    currentPost: currentPostReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
