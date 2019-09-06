import React from 'react';
import { Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import TouchableItem from '../components/TouchableItem';

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

ItemScreen.navigationOptions = ({ navigation: { state, navigate } }) => ({
  title: state.params.item.location,
  headerRight: (
    <TouchableItem
      style={styles.headerAction}
      onPress={() => navigate('Edit', { item: state.params.item })}
    >
      <SimpleLineIcons name="wrench" size={24} color="lightgray" />
    </TouchableItem>
  ),
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
  headerAction: {
    padding: 10,
  },
});
