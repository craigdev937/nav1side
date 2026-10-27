import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ICom, IComData } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const DUM = createApi({
    reducerPath: "DUM",
    tagTypes: ["Comments"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        all: builder.query<IComData, void>({
            query: () => ({
                url: "/comments",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.comments.map(({ id }) => 
                    ({ type: "Comments" as const, id })),
                { type: "Comments", id: "LIST" },
            ] : [{ type: "Comments", id: "LIST" }]
        }),
    })
});



