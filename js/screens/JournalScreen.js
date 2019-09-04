import React from 'react';
import { StyleSheet, View } from 'react-native';
import JournalItems from '../components/JournalItems';
import JournalItemInput from '../components/JournalItemInput';

export default function JournalScreen({
  screenProps: { items, onSubmit, refresh },
  navigation: { navigate },
}) {
  const _getSectionTitleFromDate = date => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const _getItemsWithSections = items => {
    if (!items.length) return [];

    let sectionTitle = _getSectionTitleFromDate(items[0].date);
    let sections = [{ title: sectionTitle, data: [] }];

    items.forEach(item => {
      sectionTitle = _getSectionTitleFromDate(item.date);
      let lastSection = sections[sections.length - 1];

      lastSection.title !== sectionTitle
        ? sections.push({ title: sectionTitle, data: [item] })
        : lastSection.data.push(item);
    });

    return sections;
  };

  const sections = _getItemsWithSections(items);

  return (
    <View style={styles.container}>
      <JournalItems
        items={sections}
        onPress={item => navigate('Item', { item })}
      />
      <JournalItemInput onSubmit={onSubmit} refresh={refresh} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
