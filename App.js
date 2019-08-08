import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import JournalItems from './js/components/JournalItems';
import JournalItemInput from './js/components/JournalItemInput';
import Store from './js/Store';

export default function App() {
  const [items, setItems] = useState([]);

  const _refreshItems = async () => {
    const items = await Store.loadItems();
    setItems(items);
  };

  useEffect(() => {
    _refreshItems();
  }, []);

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

  const _addItem = (text, photo) => {
    const newItems = [
      {
        text,
        photo,
        date: Date.now(),
      },
      ...items,
    ];

    setItems(newItems);
    Store.saveItems(newItems);
  };

  const sections = _getItemsWithSections(items);

  return (
    <View style={styles.container}>
      <JournalItems items={sections} />
      <JournalItemInput onSubmit={(text, photo) => _addItem(text, photo)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
