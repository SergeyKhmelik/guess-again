import { Heading, Skeleton, VStack } from 'native-base';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import PageLayout from '../../components/pageLayout';
import StyledButton from '../../components/styledButton';
import { DatabaseContext } from '../../database/context/database.context';
import { findRandomWords, updateWordGuessCount } from '../../database/services/words.service';
import { IWord } from '../../types/words';

const GameScreen = () => {
  // state
  const [word, setWord] = useState<IWord>();
  const [options, setOptions] = useState<IWord[]>();
  const [translationSide, setTranslationSide] = useState<boolean>(false);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { database, isLoading: isDbLoading } = useContext(DatabaseContext);

  // handlers

  const handleOptionSelect = (option: IWord): void => {
    if (!database || !word) {
      return;
    }

    setIsLoading(true);

    if (word.id !== option.id) {
      setHasFailed(true);

      updateWordGuessCount(database, word.id, 0)
        .then(() => setIsLoading(false))
        .catch((error) => {
          console.error('Error during words guess count update: ', error);
        });
    } else if (hasFailed) {
      loadNewGuessingGroup();
    } else {
      updateWordGuessCount(database, word.id, word.guessCount + 1)
        .then(loadNewGuessingGroup)
        .catch((error) => console.error('Error during words guess count update: ', error));
    }
  };

  const loadNewGuessingGroup = useCallback(() => {
    setIsLoading(true);
    setHasFailed(false);

    if (database && !isDbLoading) {
      findRandomWords(database, 5)
        .then((words) => {
          const randomIndex = Math.floor(Math.random() * 5);
          const randomSide = Math.round(Math.random());

          setIsLoading(false);
          setWord(words[randomIndex]);
          setTranslationSide(!!randomSide);
          setOptions(words);
        })
        .catch((error) => {
          console.error('Error during options loading: ', error);
        });
    }
  }, [database, isDbLoading]);

  // effects

  useEffect(() => {
    loadNewGuessingGroup();
  }, [loadNewGuessingGroup]);

  // constants
  const getQuestioningWord = (w: IWord): string => translationSide ? w?.original : w?.translation;

  const getOptionWord = (w: IWord): string => translationSide ? w?.translation : w?.original;

  // renders

  return (
    <PageLayout safeAreaBottom>
      <Heading size="2xl" textAlign="center" my={20}>
        {word ? getQuestioningWord(word) : <Skeleton.Text />}
      </Heading>

      <VStack flex={1} space={5}>
        {word && options
          ? options.map((option) => (
              <StyledButton
                key={option.id}
                disabled={isLoading}
                delayedAction
                delayedColor={option.id === word.id ? 'success.400' : 'error.400'}
                onPress={() => handleOptionSelect(option)}
              >
                {getOptionWord(option)}
              </StyledButton>
            ))
          : null}
      </VStack>
    </PageLayout>
  );
};

export default GameScreen;
