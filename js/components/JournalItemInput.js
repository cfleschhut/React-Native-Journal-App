import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

export default function JournalItemInput({ onSubmit }) {
  const textInput = useRef(null);

  const _submit = text => {
    textInput.current.clear();
    onSubmit(text);
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          ref={textInput}
          underlineColorAndroid="transparent"
          placeholder="Tagebucheintrag erstellen"
          returnKeyType="done"
          onSubmitEditing={event => _submit(event.nativeEvent.text)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
