import React from 'react';
import Splash from './src/screens/auth/Splash/Splash';
import { StyleSheet, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={Style.container}>
      <Splash />
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
