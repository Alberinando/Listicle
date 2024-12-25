import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Style from './Style';
import { colors } from '../../../theme/colors';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/Checkbox';

function Signup() {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <View style={Style.container}>
                <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
                <AuthHeader title={'Voltar'} onBackPress={() => { }} />

                <Input label={'Nome'} placeholder={'Nando'} />
                <Input label={'E-mail'} placeholder={'example@gmail.com'} />
                <Input label={'Senha'} placeholder={'*********'} isPassword />

                <View style={Style.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={Style.agreeText}>Eu concordo com os<Text style={Style.agreeTextBold}>Termos</Text> & <Text style={Style.agreeTextBold}>Privacidade</Text></Text>
                </View>
            </View>
        </>
    );
}

export default Signup;
