import { FormControl, Input, KeyboardAvoidingView, Select, VStack } from 'native-base';
import React, { useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import PageLayout from '../../components/pageLayout';
import StyledButton from '../../components/styledButton';
import { WordCategory } from '../../constants/enums';
import { CategoryLabels } from '../../constants/translations';

function AddWordScreen() {
  // state
  const [original, setOriginal] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [category, setCategory] = useState<WordCategory>();

  const isFormInvalid = !original || !translation || !category;

  // handlers

  const handleSaveWord = () => {
    console.log(original, translation, category);
    // perform server manipulations
    // ON ERROR
    // show snackbar with error
    // ON SUCCESS
    // reset form
    // show snackbar with success
  };

  // renders

  return (
    <KeyboardAvoidingView
      h="full"
      keyboardVerticalOffset={64} // TODO: magic number?
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PageLayout flexDirection="column" justifyContent="space-between" safeAreaBottom>
          <VStack space={4}>
            <FormControl>
              <VStack>
                <FormControl.Label>Оригинал</FormControl.Label>
                <Input
                  value={original}
                  onChangeText={setOriginal}
                  placeholder="Введи слово на немецком"
                />
              </VStack>
            </FormControl>

            <FormControl>
              <VStack>
                <FormControl.Label>Перевод</FormControl.Label>
                <Input
                  value={translation}
                  onChangeText={setTranslation}
                  placeholder="Введи перевод этого слова на русском"
                />
              </VStack>
            </FormControl>

            <FormControl>
              <VStack>
                <FormControl.Label>Категория</FormControl.Label>
                <Select
                  selectedValue={category}
                  onValueChange={(val) => setCategory(val as WordCategory)}
                  placeholder="Выбери категорию слова"
                >
                  {CategoryLabels.getSelectOptions().map((option) => (
                    <Select.Item key={option.id} label={option.name} value={option.id} />
                  ))}
                </Select>
              </VStack>
            </FormControl>
          </VStack>

          <StyledButton isDisabled={isFormInvalid} onPress={handleSaveWord}>
            Сохранить
          </StyledButton>
        </PageLayout>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default AddWordScreen;
