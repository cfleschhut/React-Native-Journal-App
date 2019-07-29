import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import TouchableItem from './TouchableItem';

export default function JournalItemInput({ onSubmit }) {
  const textInput = useRef(null);

  const _submit = text => {
    textInput.current.clear();
    onSubmit(text);
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.inputContainer}>
        <View style={styles.photoIcon}>
          <TouchableItem>
            <SimpleLineIcons name="camera" size={24} color="lightgray" />
          </TouchableItem>
        </View>
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
    margin: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
  },
  photoIcon: {
    alignSelf: 'center',
    marginLeft: 4,
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
