import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { Style } from './Style';
import { FavoriteItemProp } from './Interface/FavoriteItemProp';

const FavoriteItem = ({
  title,
  price,
  icon,
  image,
  onPress,
  onIconPress,
}: FavoriteItemProp) => {
  return (
    <Pressable onPress={onPress} style={Style.container} testID="favorite-item-container">
      <Image style={Style.image} source={{ uri: image }} testID="favorite-item-image" />
      <View style={Style.content} testID="favorite-item-content">
        <Text style={Style.title}>{title}</Text>
        <Text style={Style.price}>{price}</Text>
      </View>
      <Pressable onPress={onIconPress} testID="favorite-item-icon-pressable">
        <Image
          source={icon ? { uri: icon } : require('../../assets/close.png')}
          style={Style.icon}
          testID="favorite-item-icon-image"
        />
      </Pressable>
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
