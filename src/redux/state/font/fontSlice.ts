import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Types
export type FontStyle = 'Sans' | 'Serif' | 'Mono';

interface FontSliceState {
  value: FontStyle;
}

// State
const initialState: FontSliceState = {
  value: 'Sans',
};

export const FontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: (create) => ({
    setFontStyle: create.reducer((state, action: PayloadAction<FontStyle>) => {
      state.value = action.payload;
      localStorage.setItem('font-style', JSON.stringify(action.payload));
    }),
  }),
  selectors: {
    selectFont: (font) => font.value,
  },
});

// Actions
export const { setFontStyle } = FontSlice.actions;

// Selectors
export const { selectFont } = FontSlice.selectors;

export default FontSlice.reducer;
