import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";

const selectAuth = createSelector(
  (state: RootState) => state.userState.auth,
  (auth) => auth
);

const selectUser = createSelector(
  (state: RootState) => state.userState.user,
  (auth) => auth
);

export { selectAuth, selectUser };
