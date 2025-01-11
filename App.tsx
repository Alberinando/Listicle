import React from 'react';
import Routes from './src/routers/Router';
import { AuthProvider } from './src/context/Auth';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
