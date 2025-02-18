import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/app/Favorites/Favorites';
import ProductDetails from '../screens/app/ProductDetails/ProductDetails';
import { FavoritesStackParamList } from './Interface/FavoritesStacksProps';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritesMain" component={Favorites} />
      <Stack.Screen name="productDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
