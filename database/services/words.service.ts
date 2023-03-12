import { WebSQLDatabase } from 'expo-sqlite';
import { IWord } from '../../types/words';

export const findRandomWords = (
  database: WebSQLDatabase,
  amount: number = 5,
): Promise<IWord[]> =>
  new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM words WHERE guessCount < 5 ORDER BY RANDOM() LIMIT ?',
        [amount],
        (tx, result) => resolve(result.rows._array),
        (tx, error) => {
          reject(error);
          return true;
        },
      );
    });
  });

export const updateWordGuessCount = (
  database: WebSQLDatabase,
  id: number,
  guessCount: number,
): Promise<IWord> =>
  new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'UPDATE words SET guessCount = ? WHERE id = ?',
        [guessCount, id],
        (tx, result) => {
          resolve(result.rows.item(0));
        },
        (tx, error) => {
          reject(error);
          return true;
        },
      );
    });
  });

export const addNewWord = (
  database: WebSQLDatabase,
  newWord: Omit<IWord, 'id' | 'guessCount'>,
): Promise<IWord> =>
  new Promise((resolve, reject) => {
    const { original, translation, category } = newWord;

    database.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO words (original, translation, category) VALUES (?, ?, ?)',
        [original, translation, category],
        (tx, result) => {
          console.log('Added a new word!', result);
          resolve(result.rows.item(0));
        },
        (tx, error) => {
          console.error('Error during addNewWord request.', error);
          reject(error);
          return true;
        },
      );
    });
  });

export const findAllWords = (database: WebSQLDatabase): Promise<IWord[]> =>
  new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM words',
        [],
        (tx, result) => {
          resolve(result.rows._array) 
        },
        (tx, error) => {
          console.error(error);
          reject(error);
          return true;
        },
      );
    });
  });
