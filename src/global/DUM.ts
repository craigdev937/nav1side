import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IComData, IPostData } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const DUM = createApi({
    reducerPath: "DUM",
    tagTypes: ["Posts"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        com: builder.query<IComData, void>({
            query: () => ({
                url: "/comments",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.comments.map(({ id }) => 
                    ({ type: "Posts" as const, id })),
                { type: "Posts", id: "LIST" },
            ] : [{ type: "Posts", id: "LIST" }]
        }),
        posts: builder.query<IPostData, void>({
            query: () => ({
                url: "/posts",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.posts.map(({ id }) => 
                    ({ type: "Posts" as const, id })),
                { type: "Posts", id: "LIST" },
            ] : [{ type: "Posts", id: "LIST" }]
        }),
    })
});



