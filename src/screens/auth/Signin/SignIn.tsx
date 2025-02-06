import React from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import Input from '../../../components/Input/Input';
import { Style } from './Style';
import Button from '../../../components/Button/Button';
import { colors } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../routers/Interface/RouterProps';
import auth from '@react-native-firebase/auth';

const Signin = () => {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const [text, onChangeText] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressSubscribe = () => {
        navigation.navigate('SignUp');
    };

    async function handleLogin() {
        if (text !== '' && password !== '') {
          await auth()
            .signInWithEmailAndPassword(text, password)
            .catch(error => {
              console.log(error);
              if (error.code === 'auth/invalid-email') {
                Alert.alert('Alerta', 'O endereço de e-mail não é válido.');
              }
              if (error.code === 'auth/invalid-email-verified') {
                Alert.alert('Alerta', 'O e-mail é inválido.');
              }
              if (error.code === 'auth/weak-password') {
                Alert.alert('Alerta', 'A senha é muito fraca.');
              }
              if (error.code === 'auth/invalid-credential') {
                Alert.alert('Alerta', 'A credencial expirou ou está mal formada.');
              }
              if (error.code === 'auth/network-request-failed') {
                Alert.alert('Alerta', 'Sem conexão com a internet');
              }
            });
        } else {
          Alert.alert('Alerta', 'Preencha os dados');
        }
      }

    return (
        <SafeAreaView style={Style.containerView}>
            <ScrollView style={Style.container}>
                <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
                <AuthHeader onBackPress={handlePressBack} title="Fazer login" />

                <Input capitalize label="E-mail" placeholder="example@gmail.com" onChangeText={onChangeText} />
                <Input isPassword label="Password" placeholder="*******" onChangeText={onChangePassword} />

                <Button style={Style.button} title="Entrar" onPress={() => handleLogin()} />

                <Text style={Style.footerText}>
                    Não tem uma conta?
                    <Text onPress={handlePressSubscribe} style={Style.footerLink}> Inscreve-se</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signin);
