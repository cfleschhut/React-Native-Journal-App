import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [item, setItem] = useState(null);

  return (
    <View style={styles.container}>
      <Text>{item || 'Keine Einträge im Tagebuch'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Tagebucheintrag erstellen"
        returnKeyType="done"
        onSubmitEditing={event => setItem(event.nativeEvent.text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
