import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const Style = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    title: {
        color: colors.GREY,
    },
    image: {
        width: 26,
        height: 26,
    },
    imageContainer: {
        backgroundColor: colors.LIGHTGREY,
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
    },
    pressableOption: {
        // marginLeft: 24,
    },
    textOption: {
        color: colors.BLUE,
        fontWeight: '500',
    },
});
