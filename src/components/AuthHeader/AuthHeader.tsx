import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Style from './Style';
import { ButtonProps } from './interface/AuthHeaderProps';

const AuthHeader: React.FC<ButtonProps> = ({title, onBackPress}) => {
    return (
        <View style={Style.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={Style.image} source={require('../../assets/auth_back.png')} />
                <Text style={Style.title}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default AuthHeader;
