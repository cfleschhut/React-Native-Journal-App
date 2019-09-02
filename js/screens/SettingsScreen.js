import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import Store from '../Store';

export default function SettingsScreen({ screenProps }) {
  const _deleteItems = () => {
    Alert.alert(
      'Delete entries',
      'Do you want to delete all journal entries?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await Store.deleteItems();
            screenProps.refresh();
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Delete all entries" onPress={() => _deleteItems()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
