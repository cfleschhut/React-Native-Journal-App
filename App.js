import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

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

  const TouchableItem =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  let content = <Text>Keine Einträge im Tagebuch</Text>;

  if (items.length > 0) {
    content = (
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

  return (
    <View style={styles.container}>
      {content}
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          ref={textInput}
          placeholder="Tagebucheintrag erstellen"
          returnKeyType="done"
          onSubmitEditing={event => _addItem(event.nativeEvent.text)}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    marginTop: 24,
  },
  listHeader: {
    backgroundColor: 'darkgray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
