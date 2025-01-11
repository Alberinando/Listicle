import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../screens/auth/Signin/SignIn';
import SignUp from '../screens/auth/Signup/Signup';
import Splash from '../screens/auth/Splash/Splash';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
}

export default AuthRoutes;
