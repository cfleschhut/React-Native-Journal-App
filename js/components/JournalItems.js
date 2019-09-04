import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
import JournalItemRow from './JournalItemRow';

export default function JournalItems({ items, onPress }) {
  if (!items.length) {
    return (
      <View style={styles.noItems}>
        <Text style={styles.infoText}>Keine Einträge im Tagebuch</Text>
      </View>
    );
  }

  return (
    <SectionList
      sections={items}
      renderItem={({ item }) => (
        <JournalItemRow item={item} onPress={() => onPress(item)} />
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.listHeader}>{section.title}</Text>
      )}
      keyExtractor={item => item.date}
      ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
    />
  );
}

const styles = StyleSheet.create({
  noItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 22,
    fontWeight: '300',
    color: 'darkslategray',
  },
  listHeader: {
    padding: 10,
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: 'hsl(0, 0%, 95%)',
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
});
