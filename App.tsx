import React, { useEffect } from 'react';
import Routes from './src/routers/Router';
import { AuthProvider } from './src/context/Auth';
import firestore from '@react-native-firebase/firestore';

function App(): React.JSX.Element {
  useEffect(() => {
    firestore()
      .settings({
        persistence: true,
      })
      .then(() => {
        console.log('Offline persistence enabled');
      })
      .catch((error) => {
        console.error('Error enabling offline persistence:', error);
      });
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
