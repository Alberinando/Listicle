import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const Style = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 12,
    },
    email: {
        fontSize: 14,
        color: colors.GREY,
        marginBottom: 16,
    },
    content: {
        flex: 1,
    },
    button: {
        flex: 0,
    },
});
