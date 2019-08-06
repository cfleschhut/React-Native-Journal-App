import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import JournalItems from './js/components/JournalItems';
import JournalItemInput from './js/components/JournalItemInput';

const journalItems = [
  {
    title: '29.7.2017',
    data: [
      {
        text: 'Umgang mit SectionList in React Native gelernt',
        date: 1501322400000,
      },
    ],
  },
  {
    title: '28.7.2017',
    data: [
      {
        text: 'Einkauf im Supermarkt',
        date: 1501236060000,
      },
      {
        text: 'Wochenendausflug geplant',
        date: 1501236000000,
      },
    ],
  },
];

export default function App() {
  const [items, setItems] = useState(journalItems);

  const _addItem = (text, photo) => {
    let [head, ...tail] = items;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const today = `${day}.${month}.${year}`;

    if (head === undefined || head.title !== today) {
      head = { title: today, data: [] };
      tail = items;
    }

    const newItem = { text, photo, date: now.getTime() };
    head.data = [newItem, ...head.data];
    const newItems = [head, ...tail];

    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <JournalItems items={items} />
      <JournalItemInput onSubmit={(text, photo) => _addItem(text, photo)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
