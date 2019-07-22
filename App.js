import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const inputEl = useRef(null);

  const _addItem = text => {
    setItems([...items, { text, date: Date.now().toString() }]);
    inputEl.current.clear();
  };

  let content = <Text>Keine Einträge im Tagebuch</Text>;

  if (items.length > 0) {
    content = (
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <Text>{item.text}</Text>}
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
          ref={inputEl}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
