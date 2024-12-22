import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Style from './Style';
import Button from '../../../components/Button/Button';

function Splash() {
    return (
        <>
            <View style={Style.container}>
                <Image resizeMode="contain" style={Style.image} source={require('../../../assets/splash_image.png')} />

                <View style={Style.titleContainer}>
                    <Text style={Style.title}>Você encontrará</Text>
                    <Text style={Style.innertitle}>tudo o que precisa</Text>
                    <Text style={Style.title}>aqui!</Text>
                </View>

                <Button title="Inscrever-se" onPress={() => { }} />

                <Pressable onPress={() => {}} hitSlop={10}>
                    <Text style={Style.footerText}>Entrar</Text>
                </Pressable>
            </View>
        </>
    );
}

export default Splash;