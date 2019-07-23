import React from 'react';
import {
  StyleSheet,
  Text,
  SectionList,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const TouchableItem =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default function JournalItems({ items }) {
  if (items.length === 0) {
    return <Text>Keine Einträge im Tagebuch</Text>;
  }

  return (
    <SectionList
      style={styles.list}
      sections={items}
      renderItem={({ item }) => (
        <TouchableItem>
          <Text>{item.text}</Text>
        </TouchableItem>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.listHeader}>{section.title}</Text>
      )}
      keyExtractor={item => item.date}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 24,
  },
  listHeader: {
    backgroundColor: 'darkgray',
  },
});
