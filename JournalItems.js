import React from 'react';
import {
  StyleSheet,
  View,
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
    return (
      <View style={styles.noItems}>
        <Text>Keine Einträge im Tagebuch</Text>
      </View>
    );
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
  noItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 48,
  },
  listHeader: {
    backgroundColor: 'darkgray',
  },
});
