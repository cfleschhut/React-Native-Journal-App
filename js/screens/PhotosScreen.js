import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import TouchableItem from '../components/TouchableItem';

export default function PhotosScreen({
  screenProps,
  navigation: { navigate },
}) {
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
        <TouchableItem
          key={item.date}
          onPress={() => navigate('Item', { item })}
        >
          <View>
            <Image
              style={styles.photo}
              source={{ uri: item.photo }}
              resizeMode="cover"
            />
          </View>
        </TouchableItem>
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
