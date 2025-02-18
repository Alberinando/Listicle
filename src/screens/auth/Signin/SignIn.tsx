import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import Input from '../../../components/Input/Input';
import { Style } from './Style';
import Button from '../../../components/Button/Button';
import { colors } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Props } from '../../../routers/Interface/RouterProps';
import ModalError from '../../../components/ModalError/ModalError';

const Signin = () => {
  const navigation = useNavigation<Props>();
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalErrorTitle, setModalErrorTitle] = React.useState('');
  const [modalErrorMessage, setModalErrorMessage] = React.useState('');

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressSubscribe = () => {
    navigation.navigate('SignUp');
  };

  const showErrorModal = (title: string, message: string) => {
    setModalErrorTitle(title);
    setModalErrorMessage(message);
    setModalVisible(true);
  };

  async function handleLogin() {
    if (text !== '' && password !== '') {
      await auth()
        .signInWithEmailAndPassword(text, password)
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/invalid-email') {
            showErrorModal('Alerta', 'O endereço de e-mail não é válido.');
          } else if (error.code === 'auth/invalid-email-verified') {
            showErrorModal('Alerta', 'O e-mail é inválido.');
          } else if (error.code === 'auth/weak-password') {
            showErrorModal('Alerta', 'A senha é muito fraca.');
          } else if (error.code === 'auth/invalid-credential') {
            showErrorModal('Alerta', 'A credencial expirou ou está mal formada.');
          } else if (error.code === 'auth/network-request-failed') {
            showErrorModal('Alerta', 'Sem conexão com a internet');
          }
        });
    } else {
      showErrorModal('Alerta', 'Preencha os dados');
    }
  }

  return (
    <SafeAreaView style={Style.containerView}>
      <ScrollView style={Style.container}>
        <StatusBar backgroundColor={modalVisible ? colors.BLUEBACK : colors.WHITE} barStyle={modalVisible ? 'light-content' : 'dark-content'} />
        <AuthHeader onBackPress={handlePressBack} title="Fazer login" />

        <Input
          capitalize
          label="E-mail"
          placeholder="example@gmail.com"
          onChangeText={onChangeText}
        />
        <Input
          isPassword
          label="Password"
          placeholder="*******"
          onChangeText={onChangePassword}
        />

        <Button style={Style.button} title="Entrar" onPress={handleLogin} />

        <Text style={Style.footerText}>
          Não tem uma conta?
          <Text onPress={handlePressSubscribe} style={Style.footerLink}> Inscreve-se</Text>
        </Text>
      </ScrollView>
      {/* Renderiza o modal de erro quando modalVisible for true */}
      {modalVisible && (
        <ModalError
          Message={modalErrorMessage}
          MessageTitle={modalErrorTitle}
          onClose={() => setModalVisible(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default React.memo(Signin);
