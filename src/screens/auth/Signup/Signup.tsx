import React from 'react';
import { StatusBar, View } from 'react-native';
import Style from './Style';
import { colors } from '../../../theme/colors';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';

function Signup() {
    return (
        <>
            <View style={Style.container}>
                <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
                <AuthHeader title={''} onBackPress={() => {}} />
            </View>
        </>
    );
}

export default Signup;
