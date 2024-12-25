import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const Style = StyleSheet.create({
    container: {
        padding: 24,
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

export default Style;
