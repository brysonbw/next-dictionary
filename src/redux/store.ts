import { configureStore } from '@reduxjs/toolkit';
import FontsReducer from '@/redux/state/font/fontSlice';
import SearchWordReducer from '@/redux/state/search-word/searchWordSlice';
import { dictionaryAPI } from '@/app/services/dictionary';

export const store = () => {
  return configureStore({
    reducer: {
      [dictionaryAPI.reducerPath]: dictionaryAPI.reducer,
      font: FontsReducer,
      searchWord: SearchWordReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dictionaryAPI.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
