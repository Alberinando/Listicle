import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { height, width } = Dimensions.get('window');

export const Style = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45,
    },
    list: {

    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.WHITE,
        margin: 5,
    },
    activeLine: {
        backgroundColor: colors.BLACK,
        width: 30,
    },
});
