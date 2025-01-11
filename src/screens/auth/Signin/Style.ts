import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const Style = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    container: {
        padding: 24,
        backgroundColor: colors.WHITE,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.BLUE,
        marginHorizontal: 13,
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 20,
    },
    footerText: {
        color: colors.BLUE,
        marginBottom: 56,
        textAlign: 'center',
    },
    footerLink: {
        fontWeight: 'bold',
    },
});
