import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navigationReducer from '../features/posts/navigationSlice'
export const store = configureStore({
  reducer: {
    navigation: navigationReducer
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
