import React, { useState } from 'react';
import { Alert, StatusBar, Text, ToastAndroid, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<DetailsScreenNavigationProp>();

    async function handleSignUp() {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            Alert.alert('Erro ao registrar usuário: ' + error);
        }
    }

    const addData = async () => {
        try {
            await firestore().collection('users').add({
                nome: name,
                email: email,
                senha: password,
            });
            ToastAndroid.show('Dados adicionados com sucesso!', ToastAndroid.SHORT);
        } catch (error) {
            ToastAndroid.show(`Erro ao adicionar documentos: ${error}`, ToastAndroid.SHORT);
            console.error('Erro ao adicionar documentos:', error);
        }
    };

    function handleSignUpPress() {
        if (name !== '' && email !== '' && password !== '') {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    return handleSignUp();
                })
                .then(() => {
                    return addData();
                })
                .catch(error => {
                    console.log(error);
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('Alerta', 'Já existi uma conta com o endereço de email fornecido.');
                    } else if (error.code === 'auth/invalid-email') {
                        Alert.alert('Alerta', 'O endereço de e-mail não é válido.');
                    } else if (error.code === 'auth/invalid-email-verified') {
                        Alert.alert('Alerta', 'O e-mail é inválido.');
                    } else if (error.code === 'auth/weak-password') {
                        Alert.alert('Alerta', 'A senha é muito fraca.');
                    } else {
                        Alert.alert('Alerta', 'Ocorreu um erro ao registrar usuário: ' + error.message);
                    }
                });
        } else {
            Alert.alert('Alerta', 'Preencha os campos');
        }
    }

    const handlePressBack = () => {
        navigation.navigate('Splash');
    };

    return (
        <View style={Style.container}>
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
            <AuthHeader title={'Voltar'} onBackPress={handlePressBack} />

            <Input label="Nome" placeholder="Seu nome" value={name} onChangeText={setName} />
            <Input capitalize label="E-mail" placeholder="seuemail@example.com" value={email} onChangeText={setEmail} />
            <Input label="Senha" placeholder="********" isPassword value={password} onChangeText={setPassword} />

            <View style={Style.agreeRow} hitSlop={10}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={Style.agreeText}>
                    Eu concordo com os
                    <Text style={Style.agreeTextBold}> Termos</Text> &
                    <Text style={Style.agreeTextBold}> Privacidade</Text>
                </Text>
            </View>

            <Button style={Style.button} title={'Inscrever-se'} onPress={handleSignUpPress} />
        </View>
    );
}

export default SignUp;
