'use client';
import { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import { SearchSchema } from '@/lib/schema/searchBarSchema';
import { useGetWordDefinitionQuery } from './services/dictionary';
import WordDefinitionCard from './components/WordDefinitionCard';
import LoadingIndicator from './components/LoadingIndicator';
import toast from 'react-hot-toast';
import {
  queryLocalStorage,
  useAppDispatch,
  useAppSelector,
} from '@/redux/hooks';
import {
  selectSearchWord,
  setSearchWord,
  clearSearchWord,
} from '@/redux/state/search-word/searchWordSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const searchWord = useAppSelector(selectSearchWord);
  const { data, error, isLoading, isFetching } = useGetWordDefinitionQuery(
    searchWord,
    {
      skip: !searchWord, // If cached (i.e queried before) - skip. RTK won't fetch again
    }
  );

  const onSubmit = (data: SearchSchema) => {
    const { query } = data;
    dispatch(setSearchWord(query));
  };

  useEffect(() => {
    const savedValue = queryLocalStorage('word');
    if (savedValue && typeof savedValue === 'string') {
      dispatch(setSearchWord(savedValue));
    }
  }, []);

  // Handle fetch error
  useEffect(() => {
    if (error) {
      let errorMessage = 'Error: could not fetch data';
      if ('data' in error) {
        const fetchBaseQueryError = error as any;
        console.error('Error data:', fetchBaseQueryError.data);
        errorMessage = fetchBaseQueryError?.data?.title || errorMessage;
      }
      toast.error((errorMessage += '\nTry again and/or check network'), {
        duration: 7000,
      });
      dispatch(clearSearchWord());
    }
  }, [error]);

  return (
    <div className="mt-auto items-center mx-auto max-w-screen-xl">
      {/** Search Bar */}
      <section>
        <SearchBar onSubmit={onSubmit} />
      </section>
      {/** Word Definition Content/Card */}
      <section>
        {isLoading ||
          (isFetching && <LoadingIndicator classes="text-blue-400" />)}
        {Array.isArray(data) && data?.length > 0 && (
          <WordDefinitionCard data={data[0]} />
        )}
      </section>
    </div>
  );
}
