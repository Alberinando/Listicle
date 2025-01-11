import { createContext, ReactNode, useContext, useState } from 'react';
import AuthContextType from './Interface/AuthContextType';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
    const [initializing, setInitializing] = useState(true);
    const [Auth, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    return (
        <AuthContext.Provider
            value={{initializing, Auth, setInitializing, setUser}}>
                {children}
        </AuthContext.Provider>
    );
  }

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
