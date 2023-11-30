import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  stories: number[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  pageSize: number;
  pageNumber: number;
}

const initialState: State = {
  stories: [],
  isLoading: true,
  isError: false,
  isSuccess: false,
  pageSize: 10,
  pageNumber: 1,
};

const topStoriesSlice = createSlice({
  name: "topStories",
  initialState,
  reducers: {
    getTopStoriesSuccess: (state, action: PayloadAction<number[]>) => {
      state.stories = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    },
    getTopStoriesError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
    updatePageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    updatePageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export default topStoriesSlice.reducer;

export const { getTopStoriesSuccess, getTopStoriesError, updatePageSize, updatePageNumber } =
  topStoriesSlice.actions;
