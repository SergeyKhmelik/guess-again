import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './constants/routes';
import DatabaseProvider from './database/context/database.context';
import AddWordScreen from './screens/dictionary/addWord.screen';
import DictionaryActions from './screens/dictionary/dictionary.actions';
import DictionaryScreen from './screens/dictionary/dictionary.screen';
import GameScreen from './screens/game/game';
import HomeScreen from './screens/home/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <DatabaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.Home}>
              <Stack.Screen
                name={Routes.Home}
                component={HomeScreen}
                options={{ headerTitle: 'Меню' }}
              />
              <Stack.Screen
                name={Routes.Game}
                component={GameScreen}
                options={{ headerTitle: 'Выбери правильный перевод' }}
              />
              <Stack.Screen
                name={Routes.AddWord}
                component={AddWordScreen}
                options={{ headerTitle: 'Добавь слово' }}
              />
              <Stack.Screen
                name={Routes.Dictionary}
                component={DictionaryScreen}
                options={{ headerTitle: 'Список слов', headerRight: () => <DictionaryActions key="actoions" /> }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DatabaseProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
