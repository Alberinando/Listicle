import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useAuth } from '../context/Auth';
import { colors } from '../theme/colors';
import AppTabs from './routerTabs';
import AuthRoutes from './routerAuth';
import Style from './styles';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

function Routes() {
    const { Auth, initializing, setInitializing, setUser } = useAuth();
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            setUser(user);
            if (initializing) {
                setInitializing(false);
            }
        });
        return () => unsubscribe();
    }, [initializing, setInitializing, setUser]);

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: colors.WHITE,
        },
    };

    if (initializing) {
        return (
            <View style={Style.loading}>
                <ActivityIndicator color={colors.BLUE} />
            </View>
        );
    }

    return (
        <NavigationContainer theme={theme}>
            {/* Render appropriate routes based on the authentication state */}
            {Auth ? <AppTabs /> : <AuthRoutes />}
        </NavigationContainer>
    );
}

export default React.memo(Routes);
