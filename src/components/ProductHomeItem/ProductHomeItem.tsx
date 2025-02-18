import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import { ProductHomeItemProps } from './Interface/ProductHomeItemProps';
import { Style } from './Style';

const ProductHomeItem = ({ title, price, image, onPress }: ProductHomeItemProps) => {
    return (
        <Pressable onPress={onPress} style={Style.container} testID="product-home-item">
            <Image style={Style.image} source={{ uri: image }} testID="product-image" />
            <Text style={Style.title}>{title}</Text>
            <Text style={Style.price}>{price}</Text>
        </Pressable>
    );
};

export default React.memo(ProductHomeItem);
