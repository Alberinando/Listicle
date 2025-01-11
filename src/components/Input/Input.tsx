import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { InputProp } from './Interface/InputProp';
import { Style } from './Style';
import { colors } from '../../theme/colors';

const Input: React.FC<InputProp> = ({ label, placeholder, isPassword, onChangeText }) => {
    const [isPasswordVisible, setPasswordIsVisible] = useState(false);

    const onEyePress = () => {
        setPasswordIsVisible(!isPasswordVisible);
    };

    return (
        <View style={Style.container}>
            <Text style={Style.label}>{label}</Text>
            <View style={Style.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} placeholderTextColor={colors.LIGHTGREY} onChangeText={onChangeText} style={Style.input} />

                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={Style.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

export default React.memo(Input);
