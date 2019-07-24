import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const TouchableItem =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default function JournalItemRow({ item }) {
  const date = new Date(item.date);
  const minutes = date.getMinutes();
  const time = `${date.getHours()}:${(minutes < 10 ? '0' : '') + minutes}`;

  return (
    <TouchableItem>
      <View style={styles.row}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.text} numberOfLines={3}>
          {item.text}
        </Text>
      </View>
    </TouchableItem>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 16,
  },
  time: {
    marginBottom: 4,
    color: 'gray',
    fontSize: 12,
    fontWeight: '100',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});
