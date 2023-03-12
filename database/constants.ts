import { WordCategory } from '../constants/enums';
import { IWord } from '../types/words';

export const defaultVerbs: Omit<IWord, 'id' | 'guessCount'>[] = [
  {
    original: 'beginnen',
    translation: 'начинать',
    category: WordCategory.Verbs,
  },
  {
    original: 'beschreiben',
    translation: 'опи́сывать',
    category: WordCategory.Verbs,
  },
  {
    original: 'bieten',
    translation: 'предлагать',
    category: WordCategory.Verbs,
  },
  {
    original: 'binden',
    translation: 'связывать',
    category: WordCategory.Verbs,
  },
  {
    original: 'bleiben',
    translation: 'оставаться где-либо',
    category: WordCategory.Verbs,
  },
  {
    original: 'brechen',
    translation: '(с)ломать',
    category: WordCategory.Verbs,
  },
  {
    original: 'erschrecken',
    translation: '(ис)пугаться',
    category: WordCategory.Verbs,
  },
  { original: 'fallen', translation: 'падать', category: WordCategory.Verbs },
  {
    original: 'fernsehen',
    translation: 'смотре́ть',
    category: WordCategory.Verbs,
  },
  { original: 'finden', translation: 'находить', category: WordCategory.Verbs },
  {
    original: 'fliegen',
    translation: 'летать, лететь',
    category: WordCategory.Verbs,
  },
  { original: 'fliehen', translation: 'бежать', category: WordCategory.Verbs },
  {
    original: 'fließen',
    translation: 'течь, литься',
    category: WordCategory.Verbs,
  },
  {
    original: 'frieren',
    translation: 'мёрзнуть, зябнуть',
    category: WordCategory.Verbs,
  },
  { original: 'geben', translation: 'давать', category: WordCategory.Verbs },
  {
    original: 'genießen',
    translation: 'есть, наслаждаться',
    category: WordCategory.Verbs,
  },
  {
    original: 'geschehen',
    translation: 'происходить',
    category: WordCategory.Verbs,
  },
  {
    original: 'gewinnen',
    translation: 'выигрывать',
    category: WordCategory.Verbs,
  },
  {
    original: 'gießen',
    translation: 'лить, наливать',
    category: WordCategory.Verbs,
  },
  { original: 'halten', translation: 'держать', category: WordCategory.Verbs },
  { original: 'hängen', translation: 'висеть', category: WordCategory.Verbs },
  {
    original: 'kommen',
    translation: 'приходить',
    category: WordCategory.Verbs,
  },
  { original: 'können', translation: 'мочь', category: WordCategory.Verbs },
  {
    original: 'lassen',
    translation: 'велеть, позволять',
    category: WordCategory.Verbs,
  },
  {
    original: 'laufen',
    translation: 'бегать, бежать',
    category: WordCategory.Verbs,
  },
  { original: 'liegen', translation: 'лежать', category: WordCategory.Verbs },
  { original: 'lügen', translation: 'лгать', category: WordCategory.Verbs },
  { original: 'mögen', translation: 'любить', category: WordCategory.Verbs },
  {
    original: 'nehmen',
    translation: 'брать, взять',
    category: WordCategory.Verbs,
  },
  { original: 'riechen', translation: 'нюхать', category: WordCategory.Verbs },
  {
    original: 'rufen',
    translation: 'кричать, звать',
    category: WordCategory.Verbs,
  },
  {
    original: 'schließen',
    translation: 'закрывать, захлопывать',
    category: WordCategory.Verbs,
  },
  {
    original: 'schneiden',
    translation: 'резать',
    category: WordCategory.Verbs,
  },
  {
    original: 'schreiben',
    translation: 'писать, написать',
    category: WordCategory.Verbs,
  },
  {
    original: 'schreien',
    translation: 'кричать',
    category: WordCategory.Verbs,
  },
  {
    original: 'schweigen',
    translation: 'молчать, замолчать',
    category: WordCategory.Verbs,
  },
  {
    original: 'schwimmen',
    translation: 'плавать, плыть',
    category: WordCategory.Verbs,
  },
  { original: 'singen', translation: 'петь', category: WordCategory.Verbs },
  {
    original: 'tragen',
    translation: 'носить, нести',
    category: WordCategory.Verbs,
  },
  { original: 'treten', translation: 'входить', category: WordCategory.Verbs },
  { original: 'tun', translation: 'делать', category: WordCategory.Verbs },
  {
    original: 'vergessen',
    translation: 'забывать',
    category: WordCategory.Verbs,
  },
  {
    original: 'verzeihen',
    translation: 'прощать',
    category: WordCategory.Verbs,
  },
  { original: 'wachsen', translation: 'расти', category: WordCategory.Verbs },
  { original: 'waschen', translation: 'мыть', category: WordCategory.Verbs },
  {
    original: 'werben',
    translation: 'рекламировать',
    category: WordCategory.Verbs,
  },
  { original: 'werden', translation: 'стать', category: WordCategory.Verbs },
  {
    original: 'wiegen',
    translation: 'качать / весить',
    category: WordCategory.Verbs,
  },
  { original: 'wissen', translation: 'Знать', category: WordCategory.Verbs },
];
