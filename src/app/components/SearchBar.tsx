'use client';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import Input from './ui/Input';
import Button from './ui/Button';
import { searchSchema, SearchSchema } from '@/lib/schema/searchBarSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

type Props = {
  onSubmit: (data: SearchSchema) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const methods = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  const handleError = (errors: FieldValues) => {
    if (errors.query?.message) {
      toast.error(errors.query.message, {
        duration: 7000,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full max-w-screen-md mx-auto mt-4"
        onSubmit={methods.handleSubmit(onSubmit, handleError)}
      >
        <Input
          id="query"
          type="text"
          placeholder="Search word"
          classes="flex-grow px-4 py-2 border-l border-t border-b border-gray-300 rounded-l-md focus:outline-none text-black"
        />
        <Button
          type="submit"
          text="search"
          classes="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        />
      </form>
    </FormProvider>
  );
}
