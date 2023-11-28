import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Story, Comment } from "@/models";

const hackerNewsApi = createApi({
  reducerPath: "hackerNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getTopStories: builder.query<number[], void>({
      query: () => "topstories.json",
    }),
    getStory: builder.query<Story, number>({
      query: (storyId: number) => `item/${storyId}.json`,
    }),
    getComment: builder.query<Comment, number>({
      query: (commentId: number) => `item/${commentId}.json`,
    }),
  }),
});

export default hackerNewsApi;
export const { useGetTopStoriesQuery, useGetStoryQuery, useGetCommentQuery } = hackerNewsApi;
