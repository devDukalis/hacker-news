import { combineReducers } from "@reduxjs/toolkit";
import hackerNewsApi from "@/services/api";
import storiesReducer from "@/redux/features/newsStoriesSlice";

const rootReducer = combineReducers({
  stories: storiesReducer,
  [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
});

export default rootReducer;
