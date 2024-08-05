import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dictionaryAPI = createApi({
  reducerPath: 'dictionaryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.dictionaryapi.dev/api/v2/',
  }),
  endpoints: (builder) => ({
    // GET word definition
    getWordDefinition: builder.query({
      query: (word) => `entries/en/${word}`,
    }),
  }),
});

export const { useGetWordDefinitionQuery } = dictionaryAPI;
