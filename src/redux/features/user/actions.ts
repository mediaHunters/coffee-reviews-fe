import { createAction } from "@reduxjs/toolkit";
import WithPayloadType from "redux/utils/WithPayloadTyped";

import { IUser } from "../../api/types";

export const SET_USER = createAction(
  "user/setUser",
  WithPayloadType<{ jwtToken: string; user: IUser; rememberMe: boolean }>()
);
