import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { SimpleLineIcons } from '@expo/vector-icons';
import TouchableItem from '../components/TouchableItem';

export default function EditScreen({ screenProps: { onSubmit }, navigation }) {
  const [item, setItem] = useState(navigation.state.params.item);
  const textInput = useRef(null);

  const _hasCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
    );

    if (status !== 'granted') {
      console.log('Permission to camera & camera roll was denied');
      return false;
    }

    return true;
  };

  const _launchCamera = async () => {
    if (_hasCameraPermissions()) {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        item.photo = result.uri;
        setItem(item);
      }
    }
    textInput.current.focus();
  };

  useEffect(() => {
    return () => onSubmit(item);
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        ref={textInput}
        autoFocus={true}
        multiline={true}
        underlineColorAndroid="transparent"
        placeholder="Tagebucheintrag erstellen"
        onChangeText={text => {
          item.text = text;
          setItem(item);
        }}
        value={item.text}
      />
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}>
        <View style={styles.photoIcon}>
          <TouchableItem onPress={() => _launchCamera()}>
            <SimpleLineIcons name="camera" size={48}></SimpleLineIcons>
          </TouchableItem>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  photoIcon: {
    alignSelf: 'center',
  },
});
