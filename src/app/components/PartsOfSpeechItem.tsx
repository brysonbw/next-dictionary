'use client';
import { Meaning } from '@/types';
import React from 'react';

type Props = Meaning;

export default function PartsOfSpeechItem({
  partOfSpeech,
  definitions,
  antonyms,
  synonyms,
}: Props) {
  return (
    <div>
      {/** Part of Speech */}
      <div className="flex items-center space-x-4 pt-4 mb-4">
        <span className="text-black font-bold text-lg">
          <em>{partOfSpeech}</em>
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      {/** Meaning/Definition(s) */}
      {definitions && definitions?.length > 0 && (
        <>
          <p className="font-normal text-sm text-gray-400 mb-2">Meaning</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 ml-4 marker:text-primary">
            {definitions.map((item: { definition: string }, index: number) => (
              <li key={index} className="text-gray-700">
                {item.definition}
              </li>
            ))}
          </ul>
        </>
      )}
      {/** Antonyms */}
      {antonyms && antonyms?.length > 0 && (
        <div className="mt-2">
          <strong className="font-normal text-gray-500 font-serif">
            Antonyms:
          </strong>{' '}
          <span className="text-primary font-bold">{antonyms?.join(' ')}</span>
        </div>
      )}
      {/** Synonyms */}
      {synonyms && synonyms?.length > 0 && (
        <div className="mt-2">
          <strong className="font-normal text-gray-500 font-serif">
            Synonyms:
          </strong>{' '}
          <span className="text-primary font-bold">{synonyms?.join(' ')}</span>
        </div>
      )}
    </div>
  );
}
