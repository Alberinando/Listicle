import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const Style = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        width: '100%',
        height: 200,
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 38,
    },
    innertitle: {
        color: colors.ORANGE,
        textDecorationLine: 'underline',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 38,
    },
    footerText: {
        textAlign: 'center',
        color: colors.BLUE,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    },
});

export default Style;
