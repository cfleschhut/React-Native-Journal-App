import React from 'react';
import { View, Platform } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import JournalScreen from './screens/JournalScreen';
import PhotosScreen from './screens/PhotosScreen';
import SettingsScreen from './screens/SettingsScreen';
import ItemScreen from './screens/ItemScreen';
import EditScreen from './screens/EditScreen';
import TouchableItem from './components/TouchableItem';

const Tabs = createBottomTabNavigator(
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="book-open" size={24} color={tintColor} />
        ),
      },
    },
    Photos: {
      screen: PhotosScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="picture" size={24} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="settings" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'hsl(0, 0%, 65%)',
      style: {
        backgroundColor: '#fff',
      },
      labelStyle: {
        ...Platform.select({ android: { marginBottom: 0 } }),
      },
    },
  },
);

const AppNavigator = createStackNavigator({
  Root: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routes[navigation.state.index].routeName,
      headerRight: (
        <TouchableItem
          onPress={() => {
            const newItem = { text: null, photo: null, date: null };
            navigation.navigate('Edit', { item: newItem });
          }}
        >
          <View>
            <SimpleLineIcons
              name="plus"
              size={24}
              style={{ padding: 10 }}
            ></SimpleLineIcons>
          </View>
        </TouchableItem>
      ),
    }),
  },
  Item: ItemScreen,
  Edit: EditScreen,
});

export default createAppContainer(AppNavigator);
