import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Style } from './Style';
import { CheckBoxProps } from './Interface/CheckBoxProps';

const Checkbox: React.FC<CheckBoxProps> = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={Style.container}>
            {checked ? (
                <View style={Style.innerContainer}>
                    <Image style={Style.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

export default React.memo(Checkbox);
