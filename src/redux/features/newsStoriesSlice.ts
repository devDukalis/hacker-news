import { createSlice } from "@reduxjs/toolkit";

interface State {
  page: number;
  posts: number[];
}

const initialState: State = {
  page: 1,
  posts: [],
};

const newsStoriesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { incrementPage } = newsStoriesSlice.actions;

export default newsStoriesSlice.reducer;
