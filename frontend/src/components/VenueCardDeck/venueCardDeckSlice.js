import { createSlice } from '@reduxjs/toolkit'

const venueCardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState: {
    venueName: '',
    venueStreet: '',
    venueType: '',
    page: 0,
    resultsPerPage: 10,
  },
  reducers: {
    resetFilter(state) {
      state.venueName = '';
      state.venueStreet = '';
      state.venueType = '';
      state.page = 0;
    },
    setFilter(state, action) {
      const { name, address, type } = action.payload;
      state.venueName = name;
      state.venueStreet = address;
      state.venueType = type;
      },
  }
});

export const selectFilter = ({ cardDeck }) => {
  return ({
    name: cardDeck.venueName,
    venueStreet: cardDeck.venueStreet,
    venueType: cardDeck.venueType,
  });
};

export const { resetFilter, setFilter } = venueCardDeckSlice.actions;

export default venueCardDeckSlice.reducer;
