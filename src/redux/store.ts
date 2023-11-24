import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/rootReducer";

import hackerNewsApi from "@/services/api";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hackerNewsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
