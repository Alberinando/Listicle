import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/app/Home/Home';
import ProductDetails from '../screens/app/ProductDetails/ProductDetails';
import { productType } from '../screens/app/Home/Interfaces/productType';
import Favorites from '../screens/app/Favorites/Favorites';

export type HomeStackParamList = {
  HomeScreen: undefined;
  Favorites: undefined;
  productDetails: productType;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
};

export default HomeStack;
