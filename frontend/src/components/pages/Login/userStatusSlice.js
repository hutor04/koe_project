import { createSlice } from '@reduxjs/toolkit'
import { createApolloFetch } from 'apollo-fetch';
import { login } from '../../../client/api/queries/login-literal';
import config from '../../../config';

const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState: {
    id: '',
    firstName: '',
    lastName: '',
    userType: '',
    token: '',
    tokenExpiration: '',
    loggedIn: false,
    isLoadingProfile: true,
    gotError: false,
  },
  reducers: {
    profileLoaded(state, action) {
      const { user, token, tokenExpiration } = action.payload;
      const { id, firstName, lastName, userType } = user;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userType = userType;
      state.token = token;
      state.tokenExpiration = tokenExpiration;
      state.loggedIn = true;
      state.isLoadingProfile = false;
      state.gotError = false;
    },
    logOutUser(state) {
      localStorage.clear();
      state.id = '';
      state.firstName = '';
      state.lastName = '';
      state.userType = '';
      state.token = '';
      state.tokenExpiration = '';
      state.loggedIn = false;
      state.isLoadingProfile = true;
      state.gotError = false;
    },
    loadError: (state) => {
      state.isLoadingProfile = false;
      state.gotError = true;
    },
  }
});
export const selectError = ({ userStatus }) => userStatus.gotError;
export const selectLoggedIn = ({ userStatus }) => userStatus.loggedIn;
export const selectLoading = ({ userStatus }) => userStatus.isLoadingProfile;

export const selectUser = ({ userStatus }) => {
  return ({
    id: userStatus.id,
    firstName: userStatus.firstName,
    lastName: userStatus.lastName,
    userType: userStatus.userType,
    token: userStatus.token,
  });
};

export const logInUser = ({ email, password }) => (async (dispatch, getState) => {
  const fetch = createApolloFetch({
    uri: config.api,
  });
  fetch({
    query: login,
    variables: { email: email, password: password}})
    .then(resp => {
      const data = resp.data.login;
      localStorage.setItem('token', data.token);
      dispatch(profileLoaded(data));
    })
    .catch(err => {
      dispatch(loadError());
      console.log(err);
    });
});

export const { profileLoaded, logOutUser, loadError } = userStatusSlice.actions;

export default userStatusSlice.reducer;
