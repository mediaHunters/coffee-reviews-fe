import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { LoginInput, RegisterInput } from "../../../components/modals/components";
import { IGenericResponse, IUser } from "../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, any>({
      query(data) {
        return {
          url: "signUp",
          method: "POST", 
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<
      { token: string, user: IUser},
      any
    >({
      query(data) {
        return {
          url: "",
          method: "POST",
          body: data,
        };
      },
    }),
    verifyEmail: builder.mutation<
      IGenericResponse,
      { verificationCode: string }
    >({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: "GET",
        };
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation
} = authApi;
