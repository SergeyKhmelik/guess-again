import React, { useContext } from 'react';
import { Share } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Menu, Pressable, ThreeDotsIcon, HamburgerIcon } from 'native-base';
import { DatabaseContext } from '../../database/context/database.context';
import { findAllWords } from '../../database/services/words.service';
import { IExportWord } from '../../types/words';

const DictionaryActions = () => {
  const { database, isLoading } = useContext(DatabaseContext);

  const handleExportDictionary = async () => {
    if (database) {
      try {
        const words = await findAllWords(database);

        const fileName = 'dictionary.json';
        const fileCachePass = `${FileSystem.cacheDirectory}${fileName}`;
        const fileSharePass = `file://${fileCachePass}`;

        await FileSystem.writeAsStringAsync(fileCachePass, JSON.stringify(words), {
          encoding: 'utf8',
        });

        Share.share({
          url: fileSharePass,
          message: 'Sharing the dicrionary',
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Menu
      trigger={(triggerProps) => (
        <Pressable accessibilityLabel="actions" {...triggerProps}>
          <ThreeDotsIcon size="sm" color="primary" />
          {/* <HamburgerIcon size="sm" color="primary" /> */}
        </Pressable>
      )}
    >
      <Menu.Item key="export" isDisabled={isLoading} onPress={handleExportDictionary}>
        Export
      </Menu.Item>
      <Menu.Item key="import" isDisabled={isLoading}>
        Import
      </Menu.Item>
    </Menu>
  );
};

export default DictionaryActions;
