import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const Style = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.WHITE,
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
    buttonCont: {
        width: '100%',
        flexDirection: 'row',
    },
    botton: {
        flex: 1,
    },
});

export default Style;
