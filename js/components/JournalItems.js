import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
import JournalItemRow from './JournalItemRow';

export default function JournalItems({ items }) {
  if (items.length === 0) {
    return (
      <View style={styles.noItems}>
        <Text style={styles.infoText}>Keine Einträge im Tagebuch</Text>
      </View>
    );
  }

  return (
    <SectionList
      style={styles.list}
      sections={items}
      renderItem={({ item }) => <JournalItemRow item={item} />}
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
  list: {
    marginTop: 48,
  },
  listHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: '600',
    color: 'hsl(180, 100%, 35%)',
    backgroundColor: 'lightcyan',
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
});
