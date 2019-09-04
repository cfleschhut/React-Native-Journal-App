import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import TouchableItem from './TouchableItem';

export default function JournalItemRow({ item, onPress }) {
  const _formatTime = timestamp => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const imageSource = item.photo
    ? { uri: item.photo }
    : require('../../foto.png');

  return (
    <TouchableItem onPress={onPress}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.itemText}>
          <Text style={styles.time}>
            {`${_formatTime(item.date)} ${item.location || ''} ${item.weather ||
              ''}`}
          </Text>
          <Text style={styles.text} numberOfLines={3}>
            {item.text}
          </Text>
        </View>
      </View>
    </TouchableItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  time: {
    marginBottom: 2,
    color: 'gray',
    fontSize: 12,
    fontWeight: '100',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});
