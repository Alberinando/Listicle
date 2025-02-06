import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { Style } from './Style';
import { FavoriteItemProp } from './Interface/FavoriteItemProp';

const FavoriteItem = ({ title, price, icon, image, onPress, onIconPress }: FavoriteItemProp) => {
    return (
        <Pressable onPress={onPress} style={Style.container}>
            <Image style={Style.image} source={{ uri: `${image}` }} />
            <View style={Style.content}>
                <Text style={Style.title}>{title}</Text>
                <Text style={Style.price}>{price}</Text>
            </View>

            <Pressable onPress={onIconPress}>
                <Image source={icon || require('../../assets/close.png')} style={Style.icon} />
            </Pressable>
        </Pressable>
    );
};

export default React.memo(FavoriteItem);
