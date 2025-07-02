import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: colors.WHITE,
        marginVertical: 12,
        borderRadius: 4,
    },
    title: {
        color: colors.BLUE,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.GREY,
        marginTop: 6,
        fontSize: 12,
    },
    arrow: {
        width: 32,
        height: 32,
    },
    content: {},
});
