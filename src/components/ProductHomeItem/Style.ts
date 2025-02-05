import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('screen');

export const Style = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    title: {
        color: colors.TEXTGREY,
        paddingVertical: 8,
    },
    image: {
        width: (width - 100) / 2,
        height: 220,
        borderRadius: 8,
        backgroundColor: colors.LIGHTGREY,
    },
    price: {
        color: colors.BLACK,
        paddingBottom: 8,
    },
});
