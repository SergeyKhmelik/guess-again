import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import { CategoryLabels } from '../../constants/translations';
import { IWord } from '../../types/words';

interface IDictionaryItemProps {
  word: IWord;
  hasBottomDivider?: boolean;
}

const DictionaryItem: React.FC<IDictionaryItemProps> = ({
  word,
  hasBottomDivider,
}: IDictionaryItemProps): JSX.Element => (
  <HStack
    py={3}
    justifyContent="space-between"
    borderBottomColor="text.300"
    borderBottomWidth={hasBottomDivider ? 1 : 0}
  >
    <VStack>
      <HStack space={1}>
        <Text bold>{word.original}</Text>
        <Text color="text.500">({CategoryLabels.getTranslation(word.category)})</Text>
      </HStack>
      <Text>{word.translation}</Text>
    </VStack>

    <VStack>
      <Text>Подряд:</Text>
      <Text textAlign="right" color="text.600">
        {word.guessCount}
      </Text>
    </VStack>
  </HStack>
);

export default DictionaryItem;
