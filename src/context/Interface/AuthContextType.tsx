import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type AuthContextType = {
    initializing: boolean;
    Auth: FirebaseAuthTypes.User | null;
    setInitializing: (value: boolean) => void;
    setUser: (user: FirebaseAuthTypes.User | null) => void;
};

export default AuthContextType;
