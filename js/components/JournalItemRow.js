import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const TouchableItem =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default function JournalItemRow({ item }) {
  return (
    <TouchableItem>
      <Text style={styles.listItem}>{item.text}</Text>
    </TouchableItem>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    fontSize: 16,
    fontWeight: '700',
  },
});
