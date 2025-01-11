import React from 'react';
import { ScrollView, StatusBar, Text } from 'react-native';
import { Style } from './Style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';

const Profile = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
            <ScrollView style={Style.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Profile);
