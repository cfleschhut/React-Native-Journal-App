import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function ItemScreen({ navigation }) {
  const { item } = navigation.state.params;

  const photo = item.photo ? (
    <Image
      style={styles.photo}
      source={{ uri: item.photo }}
      resizeMode="cover"
    />
  ) : null;

  return (
    <ScrollView>
      {photo}
      <Text style={styles.text}>{item.text}</Text>
    </ScrollView>
  );
}

ItemScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.location,
});

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  photo: {
    width: width,
    height: width,
  },
  text: {
    padding: 10,
    fontSize: 16,
  },
});
