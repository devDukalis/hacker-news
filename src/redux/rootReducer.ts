import { combineReducers } from "@reduxjs/toolkit";
import topStoriesSlice from "@/redux/features/topStoriesSlice";
import hackerNewsApi from "@/services/api";

const rootReducer = combineReducers({
  topStories: topStoriesSlice,
  [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
});

export default rootReducer;
