import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemScreen({ screenProps }) {
  const item = {
    text: 'Ein Tagebucheintrag…',
  };

  return (
    <View style={styles.container}>
      <Text>{item.text}</Text>
    </View>
  );
}

ItemScreen.navigationOptions = () => {
  return {
    title: 'Item',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
