import { configureStore } from '@reduxjs/toolkit';
import userStatusReducer from '../pages/Login/userStatusSlice';
import venueCardDeckReducer from '../VenueCardDeck/venueCardDeckSlice';

export default configureStore({
  reducer: {
    userStatus: userStatusReducer,
    cardDeck: venueCardDeckReducer,
  },
});
