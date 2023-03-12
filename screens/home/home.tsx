import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { VStack } from 'native-base';

import PageLayout from '../../components/pageLayout';
import StyledButton from '../../components/styledButton';
import { Routes } from '../../constants/routes';

const HomeScreen: React.FC<{
  route: RouteProp<any>;
  navigation: any;
}> = ({ navigation }) => {
  return (
    <PageLayout justifyContent="center" bg="secondary.50">
      <VStack space={10} width="full" px={10}>
        <StyledButton onPress={() => navigation.navigate(Routes.Game)}>
          Играть
        </StyledButton>

        <StyledButton onPress={() => navigation.navigate(Routes.Dictionary)}>
          Словарь
        </StyledButton>

        <StyledButton onPress={() => navigation.navigate(Routes.AddWord)}>
          Добавить слово
        </StyledButton>
      </VStack>
    </PageLayout>
  );
};

export default HomeScreen;
