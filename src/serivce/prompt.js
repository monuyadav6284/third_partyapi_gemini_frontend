import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const promptApi = createApi({
  reducerPath: "promptApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    prompt: builder.mutation({
      query: (newPrompt) => ({
        url: "api/generate-text",
        method: "POST",
        body: newPrompt,
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { usePromptMutation } = promptApi;
