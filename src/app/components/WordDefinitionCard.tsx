import { configureDictionaryData } from '@/utils/configureDictionaryData';
import React from 'react';
import PartsOfSpeech from './PartsOfSpeech';
import clsx from 'clsx';
import { useAppSelector } from '@/redux/hooks';
import { selectFont } from '@/redux/state/font/fontSlice';
import { IWordDefinition } from '@/types';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

type Props = {
  data: IWordDefinition;
};

export default function WordDefinitionCard({ data }: Props) {
  const selectedFontStyle = useAppSelector(selectFont);
  const wordDefinition = configureDictionaryData(data);

  return (
    <div className="w-full max-w-screen-md mt-8 mx-auto">
      <div className="mt-8">
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="flex-1 min-w-0 ms-4 mb-4 sm:mb-0">
              {/** Word */}
              <p
                className={clsx(
                  'text-5xl font-medium text-gray-900 truncate',
                  `font-${selectedFontStyle.toLowerCase()}`
                )}
              >
                {wordDefinition?.word}
              </p>
              {/** Text */}
              {wordDefinition?.phonetics &&
                wordDefinition?.phonetics[0]?.text && (
                  <p className="text-sm text-primary truncate">
                    {wordDefinition?.phonetics[0]?.text}
                  </p>
                )}
            </div>
            {/** Audio/Pronunciation */}
            {wordDefinition?.phonetics &&
              wordDefinition?.phonetics[0]?.audio && (
                <div className="inline-flex items-center text-base font-semibold text-gray-900 audio-player">
                  <audio
                    controls
                    src={wordDefinition?.phonetics[0]?.audio}
                  ></audio>
                </div>
              )}
          </div>
          {/** Definition Content/Parts Of Speech */}
          <div className="flow-root">
            {wordDefinition?.meanings && wordDefinition?.meanings.length > 0 ? (
              <PartsOfSpeech meanings={wordDefinition?.meanings} />
            ) : (
              /** Placeholder Text */
              <p className={clsx('text-center text-gray-400 mt-12')}>
                No Definition(s) To Display
              </p>
            )}
          </div>
        </div>
        <div className="flex-1 border-t mt-10 border-gray-300"></div>
        {/** Source Urls */}
        {wordDefinition?.sourceUrls && (
          <ul className="mt-10 text-gray-400 flex flex-col">
            {wordDefinition?.sourceUrls.map((item: string) => (
              <li
                key={item}
                className="flex items-center space-x-2 py-2 text-sm"
              >
                <span>Source: </span>
                <a
                  href={item}
                  target="_blank"
                  className="flex text-gray-500 underline hover:no-underline"
                >
                  {item}
                </a>
                <ArrowTopRightOnSquareIcon width={20} height={20} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
