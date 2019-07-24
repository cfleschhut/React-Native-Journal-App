import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import JournalItems from './js/components/JournalItems';

const journalItems = [
  {
    title: '29.7.2017',
    data: [
      {
        text: 'Umgang mit SectionList in React Native gelernt',
        date: 1,
      },
    ],
  },
  {
    title: '28.7.2017',
    data: [
      {
        text: 'Einkauf im Supermarkt',
        date: 2,
      },
      {
        text: 'Wochenendausflug geplant',
        date: 3,
      },
    ],
  },
];

export default function App() {
  const [items, setItems] = useState(journalItems);
  const textInput = useRef(null);

  const _addItem = text => {
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

    const newItem = { text, date: now.getTime() };
    head.data = [newItem, ...head.data];
    const newItems = [head, ...tail];

    setItems(newItems);
    textInput.current.clear();
  };

  return (
    <View style={styles.container}>
      <JournalItems items={items} />
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={textInput}
            underlineColorAndroid="transparent"
            placeholder="Tagebucheintrag erstellen"
            returnKeyType="done"
            onSubmitEditing={event => _addItem(event.nativeEvent.text)}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
  },
});
