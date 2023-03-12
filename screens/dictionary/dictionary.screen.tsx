import { Box, FlatList, HStack, Skeleton } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import PageLayout from '../../components/pageLayout';
import StyledButton from '../../components/styledButton';
import { DatabaseContext } from '../../database/context/database.context';
import { findAllWords } from '../../database/services/words.service';
import { IWord } from '../../types/words';
import DictionaryActions from './dictionary.actions';
import DictionaryItem from './dictionaryItem';

const DictionaryScreen = () => {
  const [words, setWords] = useState<IWord[]>();
  const { database, isLoading } = useContext(DatabaseContext);

  useEffect(() => {
    if (database && !isLoading) {
      findAllWords(database)
        .then((wordsList) => setWords(wordsList))
        .catch((error) => console.error(error));
    }
  }, [database, isLoading]);

  return (
    <PageLayout p={0}>
      <Box>
        {!words && (
          <FlatList
            data={[...Array<never>(10)]}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <Box width="100%" key={index}>
                <Skeleton.Text p={5} />
              </Box>
            )}
          />
        )}

        {words && (
          <FlatList<IWord>
            px={4}
            data={words}
            renderItem={({ item, index }) => {
              return (
                <DictionaryItem
                  key={item.id}
                  word={item}
                  hasBottomDivider={index !== words.length - 1}
                />
              );
            }}
          />
        )}
      </Box>
    </PageLayout>
  );
};

export default DictionaryScreen;
