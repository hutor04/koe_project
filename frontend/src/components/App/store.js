import { configureStore } from '@reduxjs/toolkit';
import userStatusReducer from '../pages/Login/useStatusSlice';

export default configureStore({
  reducer: {
    userStatus: userStatusReducer,
  },
});
