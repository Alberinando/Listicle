import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { colors } from '../theme/colors';
import FavoritesStackNavigator from './FavoritesStack';
import Profile from '../screens/app/Profile/Profile';
import HomeStack from './HomeStack';
import Style from './styles';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route: any, focused: boolean) => {
  let icon;
  if (route.name === 'Home') {
    icon = focused
      ? require('../assets/tabs/home_active.png')
      : require('../assets/tabs/home.png');
  } else if (route.name === 'Profile') {
    icon = focused
      ? require('../assets/tabs/profile_active.png')
      : require('../assets/tabs/profile.png');
  } else if (route.name === 'Favorites') {
    icon = focused
      ? require('../assets/tabs/bookmark_active.png')
      : require('../assets/tabs/bookmark.png');
  }
  return <Image style={Style.icon} source={icon} />;
};

function AppTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.WHITE },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppTabs;
