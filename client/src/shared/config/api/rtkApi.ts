import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBaseURL: string = "/";

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: () => ({}),
});
