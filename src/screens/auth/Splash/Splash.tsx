import React from 'react';
import { Image, Pressable, StatusBar, Text, View } from 'react-native';
import Style from './Style';
import Button from '../../../components/Button/Button';
import { colors } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../routers/Interface/RouterProps';

function Splash() {
    const navigation = useNavigation<DetailsScreenNavigationProp>();

    const handlePressSubscribe = () => {
        navigation.navigate('SignUp');
    };

    const handlePressSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <>
            <View style={Style.container}>
                <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
                <Image resizeMode="contain" style={Style.image} source={require('../../../assets/splash_image.png')} />

                <View style={Style.titleContainer}>
                    <Text style={Style.title}>Você encontrará</Text>
                    <Text style={Style.innertitle}>tudo o que precisa</Text>
                    <Text style={Style.title}>aqui!</Text>
                </View>

                <Button title="Inscrever-se" onPress={handlePressSubscribe} />

                <Pressable onPress={handlePressSignIn} hitSlop={10}>
                    <Text style={Style.footerText}>Entrar</Text>
                </Pressable>
            </View>
        </>
    );
}

export default Splash;
