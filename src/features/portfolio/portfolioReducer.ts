import { createAction, createReducer } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface PortfolioState {
  errorMessage: string;
  portfolio: Portfolio;
  selectedCategoryId: null | number;
  selectedItemId: null | number;
  apiUrl: string;
}

type Category = { id: number; label: string };

type Item = {
  id: number;
  title: string;
  categoryId: number;
  imageUrl: string;
  linkUrl: string;
  description: string;
  overlayColor: string;
};

type Portfolio = { categories: Array<Category>; items: Array<Item> };

const initialState = {
  errorMessage: "",
  portfolio: { categories: [], items: [] },
  selectedCategoryId: null,
  selectedItemId: null,
  apiUrl: "",
} as PortfolioState;

export const portfolioShowError = createAction("portfolio/show/error");

export const portfolioReducer = createReducer(initialState, (builder) => {
  builder.addCase(portfolioShowError, (state, action) => {
    return { ...state, errorMessage: "Whoopsie!!!" };
  });
});

export const selectErrorMessage = (state: RootState) =>
  state.portfolio.errorMessage;

export default portfolioReducer;
