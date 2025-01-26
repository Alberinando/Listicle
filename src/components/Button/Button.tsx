import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './Interfaces/ButtonProps';
import Style from './Style';

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={[Style.container, style]} onPress={onPress} accessibilityRole="button">
            <Text style={Style.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);
