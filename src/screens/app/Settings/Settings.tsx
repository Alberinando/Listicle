import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Style } from './Style';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
    return (
        <SafeAreaView>
            <ScrollView style={Style.container}>
                <Text>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Settings);
