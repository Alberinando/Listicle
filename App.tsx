import React from 'react';
import { StyleSheet, View } from 'react-native';
import Signup from './src/screens/auth/Signup/Signup';

function App(): React.JSX.Element {
  return (
    <View style={Style.container}>
      <Signup />
    </View>
  );
}

export default App;

const Style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    },
});
