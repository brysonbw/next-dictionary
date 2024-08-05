import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Types
interface searchWordSliceState {
  value: string;
}

// State
const initialState: searchWordSliceState = {
  value: '',
};

export const SearchWordSlice = createSlice({
  name: 'searchWord',
  initialState,
  reducers: (create) => ({
    setSearchWord: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem('word', JSON.stringify(action.payload));
    }),
    clearSearchWord: create.reducer(() => {
      localStorage.removeItem('word');
    }),
  }),
  selectors: {
    selectSearchWord: (word) => word.value,
  },
});

// Actions
export const { setSearchWord, clearSearchWord } = SearchWordSlice.actions;

// Selectors
export const { selectSearchWord } = SearchWordSlice.selectors;

export default SearchWordSlice.reducer;
