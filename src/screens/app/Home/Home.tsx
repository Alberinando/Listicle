import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Style } from './Style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import Header from '../../../components/Header/Header';

const Home = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
            <ScrollView style={Style.container}>
                <Header showSearch title={'Tudo que você precisa'} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
