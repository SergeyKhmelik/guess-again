import React, { useEffect, useMemo, useState } from 'react';
import { WebSQLDatabase } from 'expo-sqlite';
import { openDatabase, initDatabase } from '../database';

interface IDatabaseContext {
  database?: WebSQLDatabase;
  isLoading: boolean;
}

export const DatabaseContext = React.createContext<IDatabaseContext>({
  database: undefined,
  isLoading: true,
});

const DatabaseProvider: React.FC<any> = ({ children }): JSX.Element => {
  const [database, setDatabase] = useState<WebSQLDatabase>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const db = openDatabase();
    initDatabase(db)
      .then(() => {
        setDatabase(db);
        setIsLoading(false);
      })
      .catch((error) => console.error);
  }, []);

  const contextData: IDatabaseContext = useMemo(
    () => ({ database, isLoading }),
    [database, isLoading],
  );

  return (
    <DatabaseContext.Provider value={contextData}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
