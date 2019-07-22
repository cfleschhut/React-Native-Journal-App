import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);

  const _addItem = text => {
    setItems([...items, { text, date: Date.now().toString() }]);
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
      <TextInput
        style={styles.input}
        placeholder="Tagebucheintrag erstellen"
        returnKeyType="done"
        onSubmitEditing={event => _addItem(event.nativeEvent.text)}
      />
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
