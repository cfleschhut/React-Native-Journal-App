import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import JournalScreen from './screens/JournalScreen';
import PhotosScreen from './screens/PhotosScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tabs = createBottomTabNavigator({
  Journal: {
    screen: JournalScreen,
    navigationOptions: {
      title: 'Journal',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name="book-open" size={24} color={tintColor} />
      ),
    },
  },
  Photos: {
    screen: PhotosScreen,
    navigationOptions: {
      title: 'Photos',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name="picture" size={24} color={tintColor} />
      ),
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name="settings" size={24} color={tintColor} />
      ),
    },
  },
});

export default createAppContainer(Tabs);
