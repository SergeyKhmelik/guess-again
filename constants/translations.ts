import { WordCategory } from './enums';
import { IWordCategoryOption } from '../types/words';

interface ISelectOption<T> {
  id: T;
  name: string;
}

class   TranslationLabels<T> {
  private translations: ISelectOption<T>[];

  constructor(translations: ISelectOption<T>[]) {
    this.translations = translations;
  }

  public getTranslation = (id: T): string | undefined => {
    const translation = this.translations.find(
      (translation) => translation.id === id,
    );
    return translation?.name;
  };

  public getSelectOptions = (): ISelectOption<T>[] => this.translations;
}

export const CategoryLabels = new TranslationLabels<WordCategory>([
  { id: WordCategory.Nouns, name: 'Nomen' },
  { id: WordCategory.Verbs, name: 'Verben' },
  { id: WordCategory.Adjectives, name: 'Adjektive' },
  { id: WordCategory.Articles, name: 'Artikel' },
  { id: WordCategory.Pronouns, name: 'Pronomen' },
  { id: WordCategory.Numerals, name: 'Numerals' },
  { id: WordCategory.Adverb, name: 'Adverbien' },
  { id: WordCategory.Conjunctions, name: 'Konjunktionen' },
  { id: WordCategory.Prepositions, name: 'Wechselpräpositionen' },
]);
