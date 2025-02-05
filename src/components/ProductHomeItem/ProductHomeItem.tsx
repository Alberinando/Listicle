import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import { ProductHomeItemProps } from './Interface/ProductHomeItemProps';
import { Style } from './Style';

const ProductHomeItem = ({ title, price, image, onPress }: ProductHomeItemProps) => {
    return (
        <Pressable onPress={onPress} style={Style.container}>
            <Image style={Style.image} source={{ uri: `${image}` }} />
            <Text style={Style.title}>{title}</Text>
            <Text style={Style.price}>{price}</Text>
        </Pressable>
    );
};

export default React.memo(ProductHomeItem);
