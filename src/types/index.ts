export interface IWordDefinition {
  id: string;
  word: string;
  phonetics?: Phonetics[];
  meanings?: Meaning[];
  sourceUrls?: string[];
  license?: {
    name: string;
    url: string;
  };
}

export type Meaning = {
  partOfSpeech?: string;
  definitions?: {
    definition: string;
  }[];
  antonyms?: string[];
  synonyms?: string[];
};

export type Phonetics = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
};
