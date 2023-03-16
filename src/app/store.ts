import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigations/navigationSlice";
import postReducer from "../features/posts/postSlice";

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        posts:postReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
