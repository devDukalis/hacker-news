import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Item, PostList } from "@/models";

const hackerNewsApi = createApi({
  reducerPath: "hnApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  endpoints: (build) => ({
    getPostList: build.query<PostList, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
    getItem: build.query<Item, number>({
      query: (id) => ({
        url: "/item",
        params: {
          id,
        },
      }),
    }),
    getPost: build.query<Item, number>({
      query: (id) => ({
        url: "/post",
        params: {
          id,
        },
      }),
    }),
  }),
});

export default hackerNewsApi;
