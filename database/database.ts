import * as SQLite from 'expo-sqlite';
import { SQLResultSet, WebSQLDatabase } from 'expo-sqlite';
import { defaultVerbs } from './constants';

const createTablePromie = (database: WebSQLDatabase): Promise<SQLResultSet> => {
  const createWordsTableQuery = `
        CREATE TABLE IF NOT EXISTS words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            original VARCHAR(255),
            translation VARCHAR(255),
            category VARCHAR(255),
            guessCount INTEGER DEFAULT 0
        )`;

  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        createWordsTableQuery,
        [],
        (tx, result) => resolve(result),
        (tx, error) => {
          reject(error);
          return true;
        },
      );
    });
  });
};

const populateTablePromise = (database: WebSQLDatabase): Promise<void> => {
  const countEntities = 'SELECT count(*) as rows FROM words';

  return new Promise((resolve, reject) => {
    database.transaction(
      (tx) => {
        tx.executeSql(
          countEntities,
          [],
          (tx, result) => {
            if (result.rows.item(0).rows > 0) {
              return resolve();
            }

            const insertedValues = defaultVerbs
              .map(
                (verb) =>
                  `('${verb.original}', '${verb.translation}', '${verb.category}')`,
              )
              .join(', ');

            tx.executeSql(
              `INSERT INTO words (original, translation, category) VALUES ${insertedValues}`,
              [],
              (tx, result) => resolve(),
              (tx, error) => {
                reject(error);
                return true;
              },
            );
          },
          (tx, error) => {
            reject(error);
            return true;
          },
        );
      },
      (error) => console.error('Error during transaction population: ', error),
    );
  });
};

export const openDatabase = (): WebSQLDatabase => {
  const db = SQLite.openDatabase('guess-again.db');

  return db;
};

export const initDatabase = async (database: WebSQLDatabase): Promise<void> => {
  try {
    await createTablePromie(database);
    await populateTablePromise(database);
  } catch (error) {
    console.error('TROLL IN THE DUNGEON', error);
  }
};
