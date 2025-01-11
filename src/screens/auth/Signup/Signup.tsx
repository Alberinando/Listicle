import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Button from '../../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../routers/Interface/RouterProps';
import Style from './Style';

function SignUp() {
    const [checked, setChecked] = useState(false);

    const navigation = useNavigation<DetailsScreenNavigationProp>();

    const handlePressBack = () => {
        navigation.goBack();
    };


    return (
        <>
            <View style={Style.container}>
                <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
                <AuthHeader title={'Voltar'} onBackPress={() => handlePressBack()} />

                <Input label={'Nome'} placeholder={'Nando'} />
                <Input label={'E-mail'} placeholder={'example@gmail.com'} />
                <Input label={'Senha'} placeholder={'*********'} isPassword />

                <View style={Style.agreeRow} hitSlop={10}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={Style.agreeText}>Eu concordo com os<Text style={Style.agreeTextBold}>Termos</Text> & <Text style={Style.agreeTextBold}>Privacidade</Text></Text>
                </View>

                <Button style={Style.button} title={'Inscrever-se'} onPress={() => { }} />
            </View>
        </>
    );
}

export default SignUp;
