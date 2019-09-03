import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

export default function PhotosScreen({ screenProps }) {
  const items = screenProps.items.filter(item => item.photo);

  if (!items.length) {
    return (
      <View style={styles.noItems}>
        <Text style={styles.infoText}>Keine Fotos im Tagebuch</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {items.map(item => (
        <Image
          style={styles.photo}
          source={{ uri: item.photo }}
          resizeMode="cover"
          key={item.date}
        />
      ))}
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  noItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: 'darkslategray',
    fontSize: 22,
    fontWeight: '300',
  },
  photo: {
    width: width,
    height: width,
    marginBottom: 2,
  },
});
