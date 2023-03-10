import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IGenericResponse } from "../types";
export const coffeeApi = createApi({
  reducerPath: "coffeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/coffee/`,
  }),
  endpoints: (builder) => ({
    getCoffees: builder.mutation<unknown, unknown>({
      query() {
        return {
          url: '/',
          method: 'GET'
        }
      }
    }),
    // createCoffee: builder.mutation<IGenericResponse, CoffeeInput>({
    //   query(data) {
    //     return {
    //       url: "create",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetCoffeesMutation,
 } = coffeeApi;