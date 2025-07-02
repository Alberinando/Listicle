import React, { useEffect, useState } from 'react';
import { StatusBar, Text, ToastAndroid, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import Header from '../../../components/Header/Header';
import ListItem from '../../../components/ListItem/ListItem';
import Button from '../../../components/Button/Button';
import { useAuth } from '../../../context/Auth';
import firestore from '@react-native-firebase/firestore';
import { Style } from './Style';

const Profile = () => {
    const { logout, Auth } = useAuth();
    const [userData, setUserData] = useState<{ nome: string; email: string; } | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (Auth) {
                try {
                    const querySnapshot = await firestore()
                        .collection('users')
                        .where('email', '==', Auth.email)
                        .limit(1)
                        .get();

                    if (!querySnapshot.empty) {
                        const data = querySnapshot.docs[0].data() as { nome: string; email: string; };
                        setUserData(data);
                    } else {
                        ToastAndroid.show('Dados do usuário não encontrados!', ToastAndroid.SHORT);
                    }
                } catch (error) {
                    ToastAndroid.show(`Erro ao buscar dados: ${error}`, ToastAndroid.SHORT);
                    console.error('Erro ao buscar dados:', error);
                }
            }
        };

        fetchUserData();
    }, [Auth]);

    const onLogout = () => {
        logout();
    };

    return (
        <SafeAreaView style={Style.content}>
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
            <Header title="Perfil" showLogout onLogout={onLogout} />
            <View style={Style.container}>
                <View style={Style.content}>
                    <Text style={Style.name}>
                        {userData ? userData.nome : 'Carregando nome...'}
                    </Text>
                    <Text style={Style.email}>
                        {userData ? userData.email : 'Carregando email...'}
                    </Text>

                    <ListItem
                        onPress={() => { }}
                        title="Minhas listas"
                        subtitle="Você tem 4 listagens"
                    />
                    <ListItem
                        onPress={() => { }}
                        title="Configuração"
                        subtitle="Conta, FAQ, Contato"
                    />
                </View>

                <Button
                    onPress={() => { }}
                    style={Style.button}
                    title="Adicionar nova listagem"
                />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Profile);
