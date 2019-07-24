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
        <Text style={styles.infoText}>Keine Einträge im Tagebuch</Text>
      </View>
    );
  }

  return (
    <SectionList
      style={styles.list}
      sections={items}
      renderItem={({ item }) => (
        <TouchableItem>
          <Text style={styles.listItem}>{item.text}</Text>
        </TouchableItem>
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
  listItem: {
    padding: 16,
    fontSize: 16,
    fontWeight: '700',
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
});
