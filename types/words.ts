import { WordCategory } from '../constants/enums';

export interface IWord {
  id: number;
  original: string;
  translation: string;
  guessCount: number;
  category: WordCategory;
}

export interface IWordCategoryOption {
  id: WordCategory;
  name: string;
}