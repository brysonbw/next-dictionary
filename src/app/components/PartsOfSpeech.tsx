'use client';
import React from 'react';
import PartsOfSpeechItem from './PartsOfSpeechItem';
import { Meaning } from '@/types';

type Props = {
  meanings: Meaning[];
};

export default function PartsOfSpeech({ meanings }: Props) {
  return (
    <>
      {meanings?.map((item: Meaning, index: number) => (
        <PartsOfSpeechItem
          key={index}
          partOfSpeech={item.partOfSpeech}
          definitions={item.definitions}
          synonyms={item.synonyms}
          antonyms={item.antonyms}
        />
      ))}
    </>
  );
}
