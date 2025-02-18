import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from './Interface/RouterProps';
import Splash from '../screens/auth/Splash/Splash';
import SignIn from '../screens/auth/Signin/SignIn';
import SignUp from '../screens/auth/Signup/Signup';
import ProductDetails from '../screens/app/ProductDetails/ProductDetails';
import Favorites from '../screens/app/Favorites/Favorites';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthRoutes(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{ headerShown: false }} />
      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
