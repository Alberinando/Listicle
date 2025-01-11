import React from 'react';
import { Text, View } from 'react-native';
import { SeparatorProp } from './Interface/Separator';
import { Style } from './Style';

const Separator:React.FC<SeparatorProp> = ({ text }) => {
    return (
       <View style={Style.container}>
            <View style={Style.line} />
            <Text style={Style.text}>{text}</Text>
            <View style={Style.line} />
       </View>
    );
};

export default React.memo(Separator);
