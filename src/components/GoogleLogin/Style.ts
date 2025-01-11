import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const Style = StyleSheet.create({
    container: {
        backgroundColor: colors.DARKGREY,
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50,
    },
    image: {
        width: 30,
        height: 30,
    },
});
