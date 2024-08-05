import { IWordDefinition, Phonetics } from '@/types';
import { v4 as uuidv4 } from 'uuid';

/**
 * Handler to configure Dictionary API response data
 * @param data
 */
export function configureDictionaryData(data: IWordDefinition) {
  //! No data
  if (data == undefined || Object.keys(data)?.length == 0) {
    return null;
  }

  return {
    id: crypto?.randomUUID() || uuidv4(), // Add UUID
    word: data.word,
    phonetics: data.phonetics?.filter(
      (item: Phonetics) => item?.license?.name?.toLowerCase() === 'by-sa 3.0'
    ),
    meanings: data.meanings,
    sourceUrls: data.sourceUrls,
  };
}
