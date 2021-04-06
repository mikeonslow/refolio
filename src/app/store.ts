import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import portfolioReducer from "../features/portfolio/portfolioReducer";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
