import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { SimpleLineIcons } from '@expo/vector-icons';
import TouchableItem from './TouchableItem';

export default function JournalItemInput({ onSubmit }) {
  const textInput = useRef(null);

  const _launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
  };

  const _submit = text => {
    textInput.current.clear();
    onSubmit(text);
  };

  const _getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );
      if (status !== 'granted') {
        alert(
          'Sorry, we need camera & camera roll permissions to make this work!',
        );
      }
    }
  };

  useEffect(() => {
    _getPermissionAsync();
  });

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.inputContainer}>
        <View style={styles.photoIcon}>
          <TouchableItem onPress={() => _launchCamera()}>
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
