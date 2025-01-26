import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { colors } from '../../theme/colors';
import { Style } from './Style';
import { CategoryBoxProps } from './Interfaces/CategoryBoxProps';
import { imageMap } from './Components/imageMap';

const CategoryBox: React.FC<CategoryBoxProps> = ({ title, image, onPress, isFirst, isSelected }) => {
    const localImage = imageMap[image];
    return (
        <Pressable onPress={onPress} style={[Style.container, isFirst ? Style.pressableOption : {}]}>
            <View style={[Style.imageContainer, isSelected ? { backgroundColor: colors.BLACK } : {}]}>
                <Image style={Style.image} source={localImage} />
            </View>
            <Text style={[Style.title, isSelected ? Style.textOption : {}]}>{title}</Text>
        </Pressable>
    );
};

export default React.memo(CategoryBox);
