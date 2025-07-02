import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Style } from './Style';
import { ListItemProp } from './Interface/ListItemProp';

const ListItem:React.FC<ListItemProp> = ({ title, subtitle, onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={[Style.container, style]}>
            <View style={Style.content}>
                <Text style={Style.title}>{title}</Text>
                {subtitle ? (
                    <Text style={Style.subtitle}>{subtitle}</Text>
                ) : null}
            </View>
            <Image style={Style.arrow} source={require('../../assets/arrow.png')} />
        </Pressable>
    );
};

export default React.memo(ListItem);
