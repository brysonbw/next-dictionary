import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

/**
 * Handle RTK Query Fetch Error
 * @param error
 */
export const handleError = (error: FetchBaseQueryError | SerializedError) => {
  if ('data' in error) {
    // error is FetchBaseQueryError
    const fetchBaseQueryError = error as FetchBaseQueryError;
    console.log('Error data:', fetchBaseQueryError.data);
  } else {
    // error is SerializedError
    console.error('Error:', error);
  }
};

/**
 * Query key/value from local storage
 * @param key
 */
export function queryLocalStorage(key: string) {
  if (typeof window != 'undefined') {
    const saved = window?.localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
  }
  return null;
}
