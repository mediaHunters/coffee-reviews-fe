import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../api/types';

interface IUserState {
  user?: IUser;
  auth: {
    token?: string,
    rememberMe: boolean
  }
}

const initialState: IUserState = {
  user: undefined,
  auth: {
    token: undefined,
    rememberMe: false
  }
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<{jwtToken: string, user: IUser, rememberMe: boolean}>) => {
      const { jwtToken, user, rememberMe } = action.payload;
      state.user = user
      state.auth = {token: jwtToken, rememberMe}
    }
  },
});



const { reducer, actions } = userSlice

export const { logout, setUser } = actions;
export default reducer;


